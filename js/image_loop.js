var folder = "/images/adult-mag-classified-ads-collection-1982-no.-1-d.-d.-teoli-jr.-a.-c.-43";
$.ajax({
    url: folder,
    success: function(data) {
        $(data).find("a").attr("href", function(i, val){
            $("body").append("<img src='" + folder + '/' + val + "'>");
        });
    }
});