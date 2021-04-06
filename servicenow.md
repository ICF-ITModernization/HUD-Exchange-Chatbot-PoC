---
title: ServiceNow
layout: default
---

<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>ServiceNow Chatbot Embedded</title>
  </head>
  <body>
    <div class="fixed flex flex-col h-screen items-end p-4 right-0">
      <div id="iframe" class="border flex-1 mb-2 overflow-hidden rounded rounded-lg transition duration-700">
        <iframe id="sn_va_web_client" title="ServiceNow Virtual Agent Client" src="https://incentivetechnologygroupllcdemo14.service-now.com/sn_va_web_client_app_embed.do?sysparm_skip_load_history=true" class="h-full">
        </iframe>
      </div>
      <button id="chatbot-trigger" class="bg-blue-500 border border-blue-500 focus:outline-none focus:ring h-12 hover:bg-blue-600 inline-flex items-center justify-around ring-offset-1 rounded-full text-white w-12 mt-auto">
        <span class="sr-only">Open Chatbot</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8" viewBox="0 0 16 16">
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"></path>
        </svg>
      </button>
    </div>
    
    <script>
      const toggle = document.getElementById('chatbot-trigger');
      const iframe = document.getElementById('iframe');
      let isToggleHidden = iframe.classList.contains('invisible');
      toggle.addEventListener('click', (event) => {
        if (isToggleHidden) {
          iframe.classList.remove('invisible', 'opacity-0');
        } else {
          iframe.classList.add('invisible', 'opacity-0');
        }
        isToggleHidden = !isToggleHidden;
      });
    </script>
  </body>
</html>
