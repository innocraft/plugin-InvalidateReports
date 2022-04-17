<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<todo>
- get to build
- test in UI
- create PR
</todo>

<template>
  <div>
    <div class="form-group row">
      <div class="col s12 ng-scope input-field m6">
        <div class="ng-scope">
          <div class="site-selection select-wrapper">
            <SiteSelector
              title
              siteid="all"
              id="invalidateSite"
              :model-value="site"
              @update:model-value="site = $event; fetchSegments()"
              :show-selected-site="true"
              all-sites-location="top"
              :switch-site-on-select="false"
              :sitename="translate('InvalidateReports_AllWebsites')"
              :all-sites-text="translate('InvalidateReports_AllWebsites')"
            />
          </div>
          <label
            for="invalidateSite"
            class="ng-binding"
          >{{ translate('InvalidateReports_ChooseWebsite') }}</label>
        </div>
      </div>
    </div>
    <div>
      <Field
        uicontrol="select"
        name="segment"
        v-model="segment"
        :options="availableSegments"
        :title="translate('InvalidateReports_ChooseSegment')"
      >
      </Field>
    </div>
    <div>
      <Field
        uicontrol="select"
        name="months"
        v-model="months"
        :value="0"
        :title="translate('InvalidateReports_ChooseRange')"
        :options="availableRanges"
      >
      </Field>
    </div>
    <SaveButton
      @confirm="invalidate()"
      :saving="loading"
      :value="translate('InvalidateReports_InvalidateReports')"
    />

    <div class="ui-confirm" id="confirmInvalidation" ref="confirmInvalidation">
      <h2 v-html="$sanitize(confirmInvalidationTitle)"></h2>
      <input role="yes" type="button" :value="translate('General_Yes')"/>
      <input role="no" type="button" :value="translate('General_No')"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  translate,
  AjaxHelper,
  NotificationsStore,
  Matomo,
  SiteSelector,
  SiteRef,
} from 'CoreHome';
import { Field, SaveButton } from 'CorePluginsAdmin';

interface InvalidateReportsState {
  loading: boolean;
  site: SiteRef;
  segment: string;
  months: number;
  availableSegments: Record<string, string>;
}

interface Segment {
  name: string;
  definition: string;
}

export default defineComponent({
  props: {
    availableRanges: {
      type: [Object, Array],
      required: true,
    },
  },
  components: {
    SiteSelector,
    Field,
    SaveButton,
  },
  data(): InvalidateReportsState {
    return {
      loading: false,
      site: {
        id: 'all',
        name: '',
      },
      segment: '',
      months: 0,
      availableSegments: {
        '': translate('InvalidateReports_AllSegments'),
      },
    };
  },
  created() {
    this.fetchSegments();
  },
  methods: {
    invalidate() {
      Matomo.helper.modalConfirm(this.$refs.confirmInvalidation as HTMLElement, {
        yes: () => {
          this.invalidateReports();
        },
      });
    },
    fetchSegments() {
      AjaxHelper.fetch<Segment[]>(
        {
          method: 'SegmentEditor.getAll',
          idSite: this.site.id,
        },
        { withTokenInUrl: true },
      ).then((segments) => {
        const availSegments: Record<string, string> = {
          '': translate('InvalidateReports_AllSegments'),
        };
        segments.forEach((segment) => {
          availSegments[segment.definition] = `${segment.name} (${segment.definition})`;
        });
        this.availableSegments = availSegments;

        if (!this.availableSegments[this.segment]) {
          this.segment = '';
        }
      });
    },
    invalidateReports() {
      this.loading = true;

      AjaxHelper.fetch<unknown[]>(
        {
          module: 'InvalidateReports',
          action: 'invalidateReports',
          idSites: this.site.id,
          segment: this.segment,
          months: this.months,
        },
        { withTokenInUrl: true },
      ).then((response) => {
        const messageParts = [
          translate('InvalidateReports_InvalidationSuccess'),
          translate('InvalidateReports_InvalidateAPIReturn'),
          ...response,
        ];
        const message = messageParts.join('<br />').replace(/\n/g, '<br />');

        const instanceId = NotificationsStore.show({
          message,
          id: 'InvalidatedReports',
          context: 'success',
          type: 'transient',
        });
        NotificationsStore.scrollToNotification(instanceId);
      }).finally(() => {
        this.loading = false;
      });
    },
  },
  computed: {
    confirmInvalidationTitle() {
      const isAllSites = this.site.id === 'all';
      return translate(
        'InvalidateReports_ConfirmInvalidation',
        isAllSites ? this.site.name : `${translate('General_Website')} ${this.site.name}`,
        this.segment
          ? `${translate('General_Segment')} ${this.availableSegments[this.segment]}`
          : translate('InvalidateReports_AllSegments'),
      );
    },
  },
});
</script>
