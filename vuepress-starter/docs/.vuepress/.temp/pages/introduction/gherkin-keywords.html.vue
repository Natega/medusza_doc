<template><div><h1 id="gherkin-keywords" tabindex="-1"><a class="header-anchor" href="#gherkin-keywords"><span>Gherkin Keywords</span></a></h1>
<h2 id="feature" tabindex="-1"><a class="header-anchor" href="#feature"><span>Feature</span></a></h2>
<p><strong>Definition</strong>: Describes the feature being tested.</p>
<ul>
<li>
<p><strong>Purpose</strong>: Provides a high-level description of the functionality being tested. It helps stakeholders understand the scope and purpose of the tests.</p>
</li>
<li>
<p><strong>Example</strong>:</p>
<div class="language-gherkin line-numbers-mode" data-ext="gherkin" data-title="gherkin"><pre v-pre class="language-gherkin"><code><span class="token feature"><span class="token keyword">Feature:</span><span class="token important"> User Login</span>
  This feature allows users to log into the system using their credentials.
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="scenario" tabindex="-1"><a class="header-anchor" href="#scenario"><span>Scenario</span></a></h2>
<p><strong>Definition</strong>: Represents a specific situation or test case within the feature.</p>
<ul>
<li>
<p><strong>Purpose</strong>: Describes a particular use case or behavior that needs to be tested. It includes a series of steps to verify that the feature works as expected.</p>
</li>
<li>
<p><strong>Example</strong>:</p>
<div class="language-gherkin line-numbers-mode" data-ext="gherkin" data-title="gherkin"><pre v-pre class="language-gherkin"><code><span class="token scenario"><span class="token keyword">Scenario:</span><span class="token important"> Successful login with valid credentials</span></span>
  <span class="token atrule">Given</span> the user is on the login page
  <span class="token atrule">When</span> the user enters a valid username and password
  <span class="token atrule">And</span> clicks the login button
  <span class="token atrule">Then</span> the user should be redirected to the dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="given" tabindex="-1"><a class="header-anchor" href="#given"><span>Given</span></a></h2>
<p><strong>Definition</strong>: Sets up the initial context or preconditions.</p>
<ul>
<li>
<p><strong>Purpose</strong>: Establishes the starting state of the scenario. It prepares the environment and sets any necessary preconditions.</p>
</li>
<li>
<p><strong>Example</strong>:</p>
<div class="language-gherkin line-numbers-mode" data-ext="gherkin" data-title="gherkin"><pre v-pre class="language-gherkin"><code>Given the user is on the login page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="when" tabindex="-1"><a class="header-anchor" href="#when"><span>When</span></a></h2>
<p><strong>Definition</strong>: Describes the action or event that triggers the scenario.</p>
<ul>
<li>
<p><strong>Purpose</strong>: Specifies the event or action that causes the system to change state. It typically represents user interactions or system events.</p>
</li>
<li>
<p><strong>Example</strong>:</p>
<div class="language-gherkin line-numbers-mode" data-ext="gherkin" data-title="gherkin"><pre v-pre class="language-gherkin"><code>When the user enters a valid username and password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="then" tabindex="-1"><a class="header-anchor" href="#then"><span>Then</span></a></h2>
<p><strong>Definition</strong>: Defines the expected outcome or result.</p>
<ul>
<li>
<p><strong>Purpose</strong>: Verifies that the system behaves as expected after the action specified in the <code v-pre>When</code> step. It checks the results and ensures they match the expected outcome.</p>
</li>
<li>
<p><strong>Example</strong>:</p>
<div class="language-gherkin line-numbers-mode" data-ext="gherkin" data-title="gherkin"><pre v-pre class="language-gherkin"><code>Then the user should be redirected to the dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="and-but" tabindex="-1"><a class="header-anchor" href="#and-but"><span>And/But</span></a></h2>
<p><strong>Definition</strong>: Used to add additional steps to <code v-pre>Given</code>, <code v-pre>When</code>, or <code v-pre>Then</code> statements.</p>
<ul>
<li>
<p><strong>Purpose</strong>: Allows for the addition of multiple conditions or actions within a scenario, enhancing readability and clarity.</p>
</li>
<li>
<p><strong>Example</strong>:</p>
<div class="language-gherkin line-numbers-mode" data-ext="gherkin" data-title="gherkin"><pre v-pre class="language-gherkin"><code>Given the user is on the login page
And the user has entered their username
When the user enters their password
And clicks the login button
Then the user should be redirected to the dashboard
But if the credentials are incorrect, an error message should be displayed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>These keywords form the foundation of Gherkin syntax, enabling the creation of clear, structured, and executable specifications for software behavior.</p>
</div></template>


