var q2 = urldecode(gup('q2'));
var site2 = document.getElementById('midd_google_custom_search_id').innerHTML;

(function() {
  var cx = site2; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();

jQuery(document).ready(function(jQuery) {
  jQuery('#midd_google_custom_search_text').click(function() {
    jQuery('#midd_google_custom_search_text').css('background', 'transparent');
  });

  jQuery('ul#catalogs a').click(function() {
    if(q2) {
      jQuery.getJSON("middlebury_catalog/query/" + this.id + '/' + q2,
        function(data){
          jQuery("#midd_catalog_directory_results").empty();
          jQuery.each(data, function(j, val){
            jQuery("#midd_catalog_directory_results").append(val.result);
          });
          jQuery('#midd_catalog_directory_results').append('<p><strong><a id="catalog-hide" href="#">Back to web search results &raquo;</a></strong></p>');
          jQuery('#midd_catalog_directory_results').show();
          jQuery('.gsc-control-cse').hide();

          jQuery('#catalog-hide').click(function() {
            jQuery('.gsc-control-cse').show();
            jQuery('#midd_catalog_directory_results').hide();
          });
        }
      );
    }
  });

  jQuery('ul#directories a').click(function() {
    if(q2) {
      jQuery.getJSON("middlebury_directory/query/" + this.id + '/' + q2,
        function(data){
          jQuery("#midd_catalog_directory_results").empty();
          jQuery.each(data, function(j, val){
            jQuery("#midd_catalog_directory_results").append(val.result);
          });
          jQuery('#midd_catalog_directory_results').append('<p><strong><a id="directory-hide" href="#">Back to web search results &raquo;</a></strong></p>');
          jQuery('#midd_catalog_directory_results').show();
          jQuery('.gsc-control-cse').hide();

          jQuery('#directory-hide').click(function() {
            jQuery('.gsc-control-cse').show();
            jQuery('#midd_catalog_directory_results').hide();
          });
        }
      );
    }
  });
});

function gup( name ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
};

function urldecode( str ) {
    // Decodes URL-encoded string
    //
    // version: 907.503
    // discuss at: http://phpjs.org/functions/urldecode
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Lars Fischer
    // +      input by: Ratheous
  // +   improved by: @Shamun Toha
  // +       note by: - Shamun: decodeURIComponent failed on many characters
    // %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
    // *     example 1: urldecode('Kevin+van+Zonneveld%21');
    // *     returns 1: 'Kevin van Zonneveld!'
    // *     example 2: urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
    // *     returns 2: 'http://kevin.vanzonneveld.net/'
    // *     example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
    // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
  // *   example 4: urldecode("%3Ctr%3E%3Ctd%3Einfo%40jquery.com%20space%20%E9%3C%2Ftd%3E%3C%2Ftr%3E");
  // *   returns 4: info@jquery.com Space e

    var hash_map = {}, ret = str.toString(), unicodeStr='', hexEscStr='';

    var replacer = function(search, replace, str) {
        var tmp_arr = [];
        tmp_arr = str.split(search);
        return tmp_arr.join(replace);
    };

    // The hash_map is identical to the one in urlencode.
    hash_map["'"]   = '%27';
    hash_map['(']   = '%28';
    hash_map[')']   = '%29';
    hash_map['*']   = '%2A';
    hash_map['~']   = '%7E';
    hash_map['!']   = '%21';
    hash_map['%20'] = '+';
    hash_map['\u00DC'] = '%DC';
    hash_map['\u00FC'] = '%FC';
    hash_map['\u00C4'] = '%D4';
    hash_map['\u00E4'] = '%E4';
    hash_map['\u00D6'] = '%D6';
    hash_map['\u00F6'] = '%F6';
    hash_map['\u00DF'] = '%DF';
    hash_map['\u20AC'] = '%80';
    hash_map['\u0081'] = '%81';
    hash_map['\u201A'] = '%82';
    hash_map['\u0192'] = '%83';
    hash_map['\u201E'] = '%84';
    hash_map['\u2026'] = '%85';
    hash_map['\u2020'] = '%86';
    hash_map['\u2021'] = '%87';
    hash_map['\u02C6'] = '%88';
    hash_map['\u2030'] = '%89';
    hash_map['\u0160'] = '%8A';
    hash_map['\u2039'] = '%8B';
    hash_map['\u0152'] = '%8C';
    hash_map['\u008D'] = '%8D';
    hash_map['\u017D'] = '%8E';
    hash_map['\u008F'] = '%8F';
    hash_map['\u0090'] = '%90';
    hash_map['\u2018'] = '%91';
    hash_map['\u2019'] = '%92';
    hash_map['\u201C'] = '%93';
    hash_map['\u201D'] = '%94';
    hash_map['\u2022'] = '%95';
    hash_map['\u2013'] = '%96';
    hash_map['\u2014'] = '%97';
    hash_map['\u02DC'] = '%98';
    hash_map['\u2122'] = '%99';
    hash_map['\u0161'] = '%9A';
    hash_map['\u203A'] = '%9B';
    hash_map['\u0153'] = '%9C';
    hash_map['\u009D'] = '%9D';
    hash_map['\u017E'] = '%9E';
    hash_map['\u0178'] = '%9F';
  // on decodeURIComponent failure.
  hash_map['<']      = '%3C';
  hash_map['>']      = '%3E';
  hash_map['/']      = '%2F';
  hash_map['@']    = '%40';
  hash_map['e']    = '%E9';
  hash_map[' ']    = '%20';


    for (unicodeStr in hash_map) {
        hexEscStr = hash_map[unicodeStr]; // Switch order when decoding
        ret = replacer(hexEscStr, unicodeStr, ret); // Custom replace. No regexing
    }

    // End with decodeURIComponent, which most resembles PHP's encoding functions
    ret = decodeURIComponent(ret);

    return ret;
}
