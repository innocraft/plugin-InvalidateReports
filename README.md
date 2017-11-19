# Piwik Invalidate Reports Plugin

[![Build Status](https://travis-ci.org/innocraft/plugin-InvalidateReports.svg?branch=master)](https://travis-ci.org/innocraft/plugin-InvalidateReports)

## Description

This plugins allows you to [invalidate historical reports](https://piwik.org/faq/how-to/faq_155/).

You can invalidate all historical reports for a specific or for all websites and for a specific or all segments. When you invalidate historical reports, they will be re-processed from the raw logs the next time archiving will run. This is useful when you want to force Piwik to re-process historical data for all reports, for example when:

* you created a new [Custom Report](https://piwik.org/docs/custom-reports/) and want the [Custom Reports](https://piwik.org/docs/custom-reports/) to be processed for all historical data
* you created a new [Funnel](https://piwik.org/docs/funnels/) and want your [Funnel](https://piwik.org/docs/funnels/) reports to be processed for all historical data
* you have modified the raw visitor information (for example by [importing new visitor logs](https://piwik.org/log-analytics/) in the past) and want these changes to raw logs reflected in all your reports.
