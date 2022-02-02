            // Array For Top Painting and info
            let paintingTopArray = [
                {
                    src: "https://media.delving.org/thumbnail/dcn/hetscheepvaartmuseum/20160009-1/900",
                    alt: "Gezicht op het IJ, met oorlogsschepen die gekalefaterd (gebreeuwd) worden. Rechts van het midden ligt De Spiegel, het schip van Michiel de Ruyter. Aan de rechterkant het 's Lands Zeemagazijn.",
                    title: "Gezicht op het IJ met 's Lands Zeemagazijn",
                    text: "Reinier Nooms behoort tot de belangrijkste zeeschilders van de 17de eeuw. Hij dankte zijn bijnaam Zeeman, waarmee hij het schilderij ook signeerde, aan zijn vele zeereizen. In de weergave van maritieme en nautische details van de schepen was hij zeer deskundig. Zijn werk is van groot belang voor de kennis van de Nederlandse 17de-eeuwse scheepvaart. Het schilderij toont 's Lands Zeemagazijn, de locatie van Het Scheepvaartmuseum, gezien vanaf de toenmalige buitenkant, nu de Prins Hendrikkade. In 1656 was het nieuwe 's Lands Zeemagazijn in gebruik genomen door de admiraliteit van Amsterdam als opslagplaats voor de uitrusting van de oorlogsvloot. Met dit schilderij kunnen we op een aanschouwelijke wijze het verhaal vertellen over Amsterdam als centrum van de 17de eeuwse scheepvaart, de functie van 's Lands Zeemagazijn en de bedrijvigheid op de werven er omheen. Het laat op een indrukwekkende manier zien dat de voorbereidingen van de Nederlands-Engelse zeeoorlogen ook op de werven in de omgeving van het huidige museum werden uitgevoerd en dat de bezoeker zich op niets minder dan historische grond bevindt. Daarmee is het schilderij zowel kunsthistorisch als maritiem-historisch een bijzondere aanwinst voor het Nederlandse openbare kunstbezit.",
                    year: "1664"
                },
                {
                    src: "https://media.delving.org/thumbnail/dcn/hetscheepvaartmuseum/s2227(03)/900",
                    alt: "Het fregatschip Cornelia Henriette op de rede van Deshima",
                    title: "Het fregatschip Cornelia Henriette op de rede van Deshima",
                    text: "Het fregatschip Cornelia Henriette op de rede van Deshima. Het schip is gepavoiseerd en is omringd door inheemse vaartuigen, waaronder een jonk.",
                    year: "1853",
                },
                {
                    src: "https://www.hetscheepvaartmuseum.nl/sites/default/files/2020-01/20154508_M%2C%20Schepen%20op%20kalm%20water%20in%20de%20avond%2C%20Willem%20van%20de%20Velde%20de%20Jonge%2C%201670%20-%201707.jpg",
                    alt: "Willem van de Velde & Zoon",
                    title: "Willem van de Velde & Zoon",
                    text: "De tentoonstelling 'Willem van de Velde, vader en zoon' vertelt over het artistieke talent en de ondernemingslust van de Van de Veldes, die een bloeiend en internationaal opererend familie-atelier runden. Vader en zoon Van de Velde worden gezien als toonaangevende Nederlandse zeeschilders van de zeventiende eeuw met een grote artistieke invloed. In de tentoonstelling wordt een gedetailleerd beeld neergezet van het familiebedrijf van de Van de Veldes, hun vakmanschap als maritieme experts en hun uitmuntende artistieke vaardigheden als kunstenaars. In de tentoonstelling zijn ongeveer 40 schilderijen en penschilderingen en 35 tekeningen te zien. Grote musea als het Rijksmuseum, het Mauritshuis en het National Maritime Museum in Greenwich verlenen hun medewerking aan de tentoonstelling. In één van de tentoonstellingszalen geeft Het Scheepvaartmuseum een voorbeeld van de veelzijdigheid van de Van de Veldes door middel van een heel andere kunstvorm: twee unieke wandtapijten, die samen met de ontwerptekeningen getoond worden.",
                    year: "1670",
                },
                {
                    src: "",
                    alt: "",
                    title: "",
                    text: "",
                    year: ""
                },
                {
                    src: "",
                    alt: "",
                    title: "",
                    text: "",
                    year: ""
                }
            ];

            let paintingBottomArray = [
                {
                    src: "https://media.delving.org/thumbnail/dcn/hetscheepvaartmuseum/a1710(02)2/900",
                    alt: "De rede van Canton",
                    title: "De rede van Canton",
                    text: "Portret van de extra-ordinaris kapitein Isaac Sweers, ter halve lijve, en trois quart naar rechts, gezicht frontaal. De linkerhand rustend op het gevest van zijn zwaard, in de rechterhand houdt hij een pistool. Op de achtergrond rechts een oorlogsschip op zee. Linksboven een familiewapen. De schilder Luttichuijs heeft zichzelf afgebeeld in de weerspiegeling van de zilveren halsberg.",
                    year: "1745"
                },
                {
                    src: "",
                    alt: "",
                    title: "",
                    text: "",
                    year: ""
                },
                {
                    src: "",
                    alt: "",
                    title: "",
                    text: "",
                    year: ""
                },
                {
                    src: "",
                    alt: "",
                    title: "",
                    text: "",
                    year: ""
                },
                {
                    src: "",
                    alt: "",
                    title: "",
                    text: "",
                    year: ""
                }
            ];
            let paintingIndex = 0;

            //Load Top Painting
            let paintingTop = document.getElementById("paintingTop");
            let paintingTopTitle = document.getElementById("paintingTopTitle");
            let paintingTopText = document.getElementById("paintingTopText");
            paintingTop.src = paintingTopArray[paintingIndex].src;
            paintingTop.alt = paintingTopArray[paintingIndex].alt;
            paintingTopTitle.innerHTML = paintingTopArray[paintingIndex].title;
            paintingTopText.innerHTML = paintingTopArray[paintingIndex].text;
            
            //Load Bottom Painting
            let paintingBottom = document.getElementById("paintingBottom");
            let paintingBottomTitle = document.getElementById("paintingBottomTitle");
            let paintingBottomText = document.getElementById("paintingBottomText");
            paintingBottom.src = paintingBottomArray[paintingIndex].src;
            paintingBottom.alt = paintingBottomArray[paintingIndex].alt;
            paintingBottomTitle.innerHTML = paintingBottomArray[paintingIndex].title;
            paintingBottomText.innerHTML = paintingBottomArray[paintingIndex].text;
             
            
            
            function buttonLeftPress(){
                paintingIndex -= 1;
                buttonPress();
                console.log(paintingIndex);
            }
            function buttonRightPress(){
                paintingIndex += 1;
                console.log(paintingIndex);
                buttonPress();
            }
            function buttonPress(){
                
                if(paintingIndex == -1){
                    paintingIndex = paintingTopArray.length - 1;
                }
                if(paintingIndex == paintingTopArray.length){
                    paintingIndex = 0;
                }
                //Set Top Painting
                paintingTop.src = paintingTopArray[paintingIndex].src;
                paintingTop.alt = paintingTopArray[paintingIndex].alt;
                paintingTopTitle.innerHTML = paintingTopArray[paintingIndex].title;
                paintingTopText.innerHTML = paintingTopArray[paintingIndex].text;
                
                //Set Bottom Painting
                paintingBottom.src = paintingBottomArray[paintingIndex].src;
                paintingBottom.alt = paintingBottomArray[paintingIndex].alt;
                paintingBottomTitle.innerHTML = paintingBottomArray[paintingIndex].title;
                paintingBottomText.innerHTML = paintingBottomArray[paintingIndex].text;

            }