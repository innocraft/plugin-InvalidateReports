<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <ContentBlock
    :content-title="translate('InvalidateReports_InvalidateHistoricalReports')"
    class="invalidate-reports-page"
  >
    <p>{{ translate('InvalidateReports_PageDescription') }}</p>

    <ul id="examples">
      <li v-html="$sanitize(examplesCustomReportsText)"></li>
      <li v-html="$sanitize(examplesFunnelsText)"></li>
      <li v-html="$sanitize(examplesRawDataText)"></li>
    </ul>

    <InvalidateReports :available-ranges="availableRanges"/>
  </ContentBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContentBlock, translate } from 'CoreHome';
import InvalidateReports from './InvalidateReports.vue';

export default defineComponent({
  props: {
    availableRanges: {
      type: [Object, Array],
      required: true,
    },
  },
  components: {
    InvalidateReports,
    ContentBlock,
  },
  computed: {
    examplesCustomReportsText() {
      return translate(
        'InvalidateReports_ExamplesCustomReports',
        '<a href="https://piwik.org/docs/custom-reports/" target="_blank" rel="noreferrer noopener">',
        '</a>',
      );
    },
    examplesFunnelsText() {
      return translate(
        'InvalidateReports_ExamplesFunnels',
        '<a href="https://piwik.org/docs/funnels/" target="_blank" rel="noreferrer noopener">',
        '</a>',
      );
    },
    examplesRawDataText() {
      return translate(
        'InvalidateReports_ExamplesRawData',
        '<a href="https://piwik.org/log-analytics/" target="_blank" rel="noreferrer noopener">',
        '</a>',
      );
    },
  },
});
</script>
