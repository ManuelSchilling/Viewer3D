var detailsBlock = [
    {infoHead: "Beschreibung", infoText: "Hier steht die Beschreibung des Objektes. Nachfolgender Text wurde nur verfasst, damit ich etwas mehr Text habe."},
    {infoHead: "Autor", infoText: "Max Mustermann, DAI-Project"},
    {infoHead: "Forschungsdaten", infoText: "kfsadbf alwrfaweifawfb akwjbfjasbf bjfasb fawbfbas jkfjwbfsfw  jvbfasjkhbfg wjhbfgjasbr"},
    {infoHead: "Datierung", infoText: "hadrianisch"},
    {infoHead: "Lokalisierung", infoText: "shfoiseiffisufsiv asihisdf sduhidfu gdigifdhiasdhg ihdih fds iadgiuh asughadfig hsaiug sdis su sfiusb  sfiu siufsdiu biubsdiu sdibsdibsdiu sdib  oiusdi bsdi bsdi ubsfisbdfis ib isfsdib sdi bib  lihisbduzb sdibsd ib sdibsduhbsiudbsduz fsdb ibhsad hsapuasfhs sahas asdhsa psdh aspohsish oshfdoiuh asfdfasfdpoih asfpohsfd iposfoihasfdoaphs afpoihs fdofd afdo ihdafoiahfdp oasoahdaohofdh oapd  ufdou asefi"},
    {infoHead: "Technik", infoText: "Bildhauerei"},
    {infoHead: "Material", infoText: "Marmor"},
    {infoHead: "Erhaltung", infoText: "vollständig"},
    {infoHead: "Maße", infoText: "Breite: 190cm\nHöhe:   79cm\nTiefe:  50cm"}
];
var relatedBlock = [
    { name: "Literatur", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"},
        {autor: "H.-J. Schalles", title: "Untersuchungen zur Kulturpolitik der pergamenischen Herrscher"},
        {autor: "A. Schober", title: "Die Kunst von Pergamon"}
    ]},
    { name: "Buchseiten", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"}
    ]},
    { name: "Reproduktion", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"}
    ]},
    { name: "Sammlungen", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"}
    ]},
    { name: "Rezeption", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"}
    ]},
    { name: "Typen", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"},
        {autor: "A. Schober", title: "Die Kunst von Pergamon"}
    ]}
];
function loadDetails(){
    var obinfo = document.createElement("H2");
    obinfo.innerHTML = "Objektinformationen";
    var detailsContent = document.getElementById("details-content");
    detailsContent.appendChild(obinfo);

    for (let i = 0; i < detailsBlock.length; i++) {
        var heading = document.createElement("H3");
        heading.innerHTML = detailsBlock[i].infoHead;
        var infoText = document.createElement("P");
        infoText.innerHTML = detailsBlock[i].infoText;
        detailsContent.appendChild(heading);
        detailsContent.appendChild(infoText);
    }
}
function loadRelated(){
    var relatedContent = document.getElementById("related-content");
    for (let i = 0; i < relatedBlock.length; i++) {
        var works = relatedBlock[i].works;

        var relatedTopicButton = document.createElement("BUTTON");
        relatedTopicButton.innerHTML = relatedBlock[i].name;
        relatedTopicButton.classList.add("contentbutton");
        
        var relatedTopicButtonNumber = document.createElement("SPAN");
        relatedTopicButtonNumber.innerHTML = works.length;
        
        var relatedTopicContent = document.createElement("DIV");
        relatedTopicContent.style.display ="none";
        relatedTopicContent.style.width = "100%";

        relatedTopicButton.appendChild(relatedTopicButtonNumber);
        relatedContent.appendChild(relatedTopicButton);
        relatedContent.appendChild(relatedTopicContent);
        //<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
        for (let j = 0; j < works.length; j++){
            var divforContent = document.createElement("DIV");
            divforContent.classList.add("divContent");
            var content = document.createElement("a");
            content.innerHTML = works[j].autor + ', ' + works[j].title;
            content.style.width = "100%";
            divforContent.appendChild(content);
            relatedTopicContent.appendChild(divforContent);
        }
        relatedTopicButton.addEventListener("click", function(event){
            event.target.classList.toggle("active");
            if (event.target.nextElementSibling.style.display === "inline") 
                event.target.nextElementSibling.style.display = "none";
            else 
                event.target.nextElementSibling.style.display = "inline";
        });
        
    }
}
function displayDetails(event){
    var relatedContent = document.getElementById("related-content");
    var relatedbutton = document.getElementById("relatedbutton");
    relatedbutton.classList.remove("active");
    relatedContent.style.display = "none";
    var detailsContent = document.getElementById("details-content");
    event.target.classList.add("active");
    detailsContent.style.display = "inline";
}
function displayRelated(event){
    var detailsContent = document.getElementById("details-content");
    var detailsbutton = document.getElementById("detailsbutton");
    detailsbutton.classList.remove("active");
    detailsContent.style.display = "none";
    var relatedContent = document.getElementById("related-content");
    event.target.classList.add("active");
    relatedContent.style.display = "inline";
}
function OnInit() {
    loadDetails();
    loadRelated();
    document.getElementById("detailsbutton").classList.add("active");
    var detailsContent = document.getElementById("details-content");
    detailsContent.style.display = "inline";
}