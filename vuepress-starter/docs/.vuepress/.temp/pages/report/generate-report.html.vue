<template><div><h1 id="report-generation" tabindex="-1"><a class="header-anchor" href="#report-generation"><span>Report Generation</span></a></h1>
<p>In build mode, Medusza automatically generates two types of reports:</p>
<ol>
<li><strong>HTML Report</strong> (<code v-pre>report_test.html</code>)</li>
<li><strong>JSON Report</strong> (<code v-pre>report.json</code>)</li>
</ol>
<h2 id="accessing-the-reports" tabindex="-1"><a class="header-anchor" href="#accessing-the-reports"><span>Accessing the Reports</span></a></h2>
<p>Both reports are saved in the Medusza home directory. To read the reports, navigate to:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>$home/medusza
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="html-report" tabindex="-1"><a class="header-anchor" href="#html-report"><span>HTML Report</span></a></h2>
<p>The HTML report (<code v-pre>report_test.html</code>) provides a user-friendly, web-based view of the data and findings from the build process. This report is ideal for quick browsing and presentation purposes.</p>
<h2 id="json-report" tabindex="-1"><a class="header-anchor" href="#json-report"><span>JSON Report</span></a></h2>
<p>The JSON report (<code v-pre>report.json</code>) contains the same data as the HTML report but in a machine-readable format. This is useful for programmatic access, further processing, or integration with other tools.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Medusza ensures that all relevant build information is documented and easily accessible through these automatically generated reports. By navigating to the <code v-pre>$home/medusza</code> directory, you can quickly access and utilize the <code v-pre>report_test.html</code> and <code v-pre>report.json</code> files as needed.</p>
<h1 id="report-generation-from-command-line" tabindex="-1"><a class="header-anchor" href="#report-generation-from-command-line"><span>Report Generation from Command Line</span></a></h1>
<p>In build mode, Medusza automatically generates two types of reports:</p>
<ol>
<li><strong>HTML Report</strong></li>
<li><strong>JSON Report</strong></li>
</ol>
<h2 id="generating-reports-via-command-line" tabindex="-1"><a class="header-anchor" href="#generating-reports-via-command-line"><span>Generating Reports via Command Line</span></a></h2>
<p>When running tests from the command line or in a CI/CD pipeline, you can specify the format and customize the output file names and paths for the reports.</p>
<h3 id="json-report-1" tabindex="-1"><a class="header-anchor" href="#json-report-1"><span>JSON Report</span></a></h3>
<p>To generate a JSON report, use the following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span> -- <span class="token parameter variable">--format</span> <span class="token string">"json:Your_path/your_report_name.json"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="html-report-1" tabindex="-1"><a class="header-anchor" href="#html-report-1"><span>HTML Report</span></a></h3>
<p>To generate an HTML report, use the following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span> -- <span class="token parameter variable">--format</span> <span class="token string">"html:Your_path/your_report_name.html"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Replace <code v-pre>Your_path</code> with the desired directory and <code v-pre>your_report_name</code> with your preferred file name for the reports.</p>
<h2 id="summary-1" tabindex="-1"><a class="header-anchor" href="#summary-1"><span>Summary</span></a></h2>
<p>Medusza allows flexible report generation through command line options, making it easy to integrate with CI/CD pipelines. By using the appropriate <code v-pre>--format</code> option, you can direct the output of your reports to specific locations and customize their file names, ensuring that all relevant build information is captured and accessible.</p>
</div></template>


