var folder = 'images/adult-mag-classified-ads-collection-1982-no.-1-d.-d.-teoli-jr.-a.-c.-43';


adArray = [];
folderLength = 70;

for (var i = 0; i < folderLength; i++) {
    adArray.push(folder 
        + '/Adult Mag Classified Ads Collection 1982 No.1 D.D.Teoli Jr. A.C. (' 
        + i + ').jpg');
};

var imgs = adArray.map(function(URL) {
    var img = new Image();
    img.src = URL;
    document.body.appendChild(img);
    return img;
})