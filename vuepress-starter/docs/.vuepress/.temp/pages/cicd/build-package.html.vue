<template><div><h1 id="integrating-medusza-tests-with-your-ci-cd-pipeline" tabindex="-1"><a class="header-anchor" href="#integrating-medusza-tests-with-your-ci-cd-pipeline"><span>Integrating Medusza Tests with Your CI/CD Pipeline</span></a></h1>
<p>This section provides a step-by-step guide to integrating tests from Medusza into your CI/CD pipeline. By following these instructions, you will be able to create and manage test packages easily.</p>
<h2 id="creating-a-test-package" tabindex="-1"><a class="header-anchor" href="#creating-a-test-package"><span>Creating a Test Package</span></a></h2>
<p>To create a test package using Medusza:</p>
<ol>
<li>
<p><strong>Navigate to Project Tests:</strong></p>
<ul>
<li>Go to the &quot;Project Tests&quot; main page within the Medusza dashboard.</li>
</ul>
</li>
<li>
<p><strong>Build the Package:</strong></p>
<ul>
<li>Click on the <code v-pre>Build</code> button.</li>
<li>The package will be generated at the following location: <code v-pre>$home/medusza/project/your_project</code>.</li>
</ul>
</li>
</ol>
<h2 id="installing-the-test-package" tabindex="-1"><a class="header-anchor" href="#installing-the-test-package"><span>Installing the Test Package</span></a></h2>
<p>To install and run the test package:</p>
<ol>
<li>
<p><strong>Prepare Your Environment:</strong></p>
<ul>
<li>Ensure you have Node.js and npm (Node Package Manager) installed on your machine. If not, download and install them from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js official website</a>.</li>
</ul>
</li>
<li>
<p><strong>Open the Terminal:</strong></p>
<ul>
<li>Open a terminal window and navigate to the root of the package folder. This folder should contain a <code v-pre>package.json</code> file.</li>
</ul>
</li>
<li>
<p><strong>Install the Package:</strong></p>
<ul>
<li>Run the following command to install the package dependencies:<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Run the Tests:</strong></p>
<ul>
<li>After the installation is complete, run the tests using the following command:<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<p>By following these steps, you will be able to create a test package with Medusza and integrate it into your CI/CD pipeline seamlessly.</p>
</div></template>


