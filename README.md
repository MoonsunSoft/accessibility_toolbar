# Accessibility Toolbar

Accessibility Toolbar Plugin is a simple accessibility component without 
dependencies (clean javascript), including a variety of tools. This component
allows users with disabilities easy and convenient way to browse most websites.

## Language Support

Accessibility Toolbar Plugin may work with as many languages as you need. 
For now, it supports out of the box English by default, Hebrew, Russian, 
and French. The plugin tries to detect current language in page by 
schema like "ru-RU", "he-IL", "fr_FR" (Wordpress like CMS locales). 
If your website uses these locale schemas you need do nothing, otherwise, 
you probably can force locale by adding property "forcelang" to additional 
init (see below). You always can edit app/js/language.json file for adding 
or change language strings(see "For Developers" section below).


## How to use Accessibility Toolbar

### CDN

Add this script to your website


    <script src="https://cdn.jsdelivr.net/gh/mickidum/acc_toolbar/acctoolbar/acctoolbar.min.js">
    <script
    // optional init
    window.onload = function() {
      window.micAccessTool = new MicAccessTool({
        link: 'http://your-awesome-website.com/your-accessibility-declaration.pdf',
        contact: 'mailto:your-mail@your-awesome-website.com',
        buttonPosition: 'right', // default is 'left'
        forceLang: 'ru-RU' // default is 'en' may be 'he-IL', 'ru-RU', or 'fr_FR'
      });
    }
    </script>


### Download

1. Download(Right click and save) Accessibility Toolbar Plugin
2. Store this file in your website directory (i.e. /public_html)
3. Add script to website


    <script src="/path/to/acc_toolbar/acctoolbar/acctoolbar.min.js">
    <script
      // optional init
      window.onload = function() {
        window.micAccessTool = new MicAccessTool({
          link: 'http://your-awesome-website.com/your-accessibility-declaration.pdf',
          contact: 'mailto:your-mail@your-awesome-website.com',
          buttonPosition: 'right', // default is 'left'
          forceLang: 'ru-RU' // default is 'en' may be 'he-IL', 'ru-RU', or 'fr_FR'
        });
      }
    </script>

That's all


## For Developers

1. Clone or download this repo
2. Install gulp.js - write in terminal "npm install gulp -g"
3. cd [installed repo folder]
4. Write in terminal - "npm install"
5. Write in terminal - "gulp" to run app

Now you can change it.

