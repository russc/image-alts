# image-alts
It is not uncommon for a large website you manage to need alt text images added after the images have beeen uploaded and gone live.  In some cases, the images end up running on the site without an alt text attribute, which is not good for accessibility. 

This can be very difficult with large sites that have specific alt text based on the image and its url.  This little library can take a JSON file and iterate through it to target specific images on specific dynmaically created URLs and add alt text attributes where they are missing.  

I originally came up with this when given a spreadsheet with over 300 images all needing specific alt text based on their respective URL.  I took the excel file and converted over to JSON using this tool: http://www.convertcsv.com/csv-to-json.htm.  The excel shet contained thre columns: Image URL, Page URL, and Alt Text (I removed the spaces for easier conversion).  Then the resulting JSON struction should resemble...
~~~~
{
   "ImageURL": "https://placeimg.com/640/480/people",
   "PageURL": "https://russc.github.io/image-alts/after.html",
   "AltText": "People"
},
~~~~

Demo: https://russc.github.io/image-alts/index.html
