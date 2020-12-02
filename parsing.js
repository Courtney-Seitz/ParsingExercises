
// Taken from https://trefle.io/api/v1/species?token=TOKEN using reqbin.com.
const species = {
    "data": [{
        "id": 678281,
        "common_name": "Evergreen oak",
        "slug": "quercus-rotundifolia",
        "scientific_name": "Quercus rotundifolia",
        "year": 1785,
        "bibliography": "Encycl. 1: 723 (1785)",
        "author": "Lam.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Beech family",
        "genus_id": 5778,
        "image_url": "https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30",
        "synonyms": ["Quercus lyauteyi", "Quercus rotundifolia f. crassicupulata", "Quercus ballota", "Quercus ilex f. brevicupulata", "Quercus calycina", "Quercus rotundifolia f. dolichocalyx", "Quercus rotundifolia f. pilosella", "Quercus rotundifolia f. macrocarpa", "Quercus rotundifolia f. calycina", "Quercus ilex f. macrocarpa", "Quercus ilex subsp. ballota", "Quercus rotundifolia var. pilosella", "Quercus rotundifolia var. brevicupulata", "Quercus rotundifolia subsp. maghrebiana", "Quercus rotundifolia f. brevicupulata", "Quercus rotundifolia var. macrocarpa"],
        "genus": "Quercus",
        "family": "Fagaceae",
        "links": {
            "self": "/api/v1/species/quercus-rotundifolia",
            "plant": "/api/v1/plants/quercus-rotundifolia",
            "genus": "/api/v1/genus/quercus"
        }
    }, {
        "id": 190500,
        "common_name": "Stinging nettle",
        "slug": "urtica-dioica",
        "scientific_name": "Urtica dioica",
        "year": 1753,
        "bibliography": "Sp. Pl.: 984 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Nettle family",
        "genus_id": 1028,
        "image_url": "https://bs.floristic.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248",
        "synonyms": ["Urtica major", "Urtica tibetica", "Urtica sicula", "Urtica eckloniana", "Urtica haussknechtii", "Urtica submitis"],
        "genus": "Urtica",
        "family": "Urticaceae",
        "links": {
            "self": "/api/v1/species/urtica-dioica",
            "plant": "/api/v1/plants/urtica-dioica",
            "genus": "/api/v1/genus/urtica"
        }
    }, {
        "id": 126957,
        "common_name": "Orchardgrass",
        "slug": "dactylis-glomerata",
        "scientific_name": "Dactylis glomerata",
        "year": 1753,
        "bibliography": "Sp. Pl.: 71 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Grass family",
        "genus_id": 2284,
        "image_url": "https://bs.floristic.org/image/o/05c2f3cf28a921235daece7b31806741c7251784",
        "synonyms": ["Koeleria dactylis", "Festuca glomerata", "Trachypoa vulgaris", "Phalaris glomerata", "Dactylis glomerata var. vivipara", "Dactylis glomerata var. detonsa", "Dactylis glomerata f. variegata", "Dactylis decalcata", "Dactylis abbreviata", "Dactylis glomerata f. hispida", "Dactylis stenophylla", "Dactylis kovarovicii", "Dactylis noeana", "Dactylis kirschbaumii", "Dactylis glomerata var. variegata", "Dactylis pubescens", "Festuca phalarioides", "Dactylis nemorosa", "Dactylis glaucescens", "Dactylis metlesicsii", "Dactylis altaica", "Dactylis glomerata var. titani", "Dactylis cylindracea", "Dactylis scaberrima", "Bromus cylindraceus", "Dactylis peylii", "Dactylis glomerata f. pubescens", "Dactylis capitellata", "Dactylis pendula", "Sesleria cirtensis", "Dactylis glomerata subsp. himalayensis"],
        "genus": "Dactylis",
        "family": "Poaceae",
        "links": {
            "self": "/api/v1/species/dactylis-glomerata",
            "plant": "/api/v1/plants/dactylis-glomerata",
            "genus": "/api/v1/genus/dactylis"
        }
    }, {
        "id": 101913,
        "common_name": "Common yarrow",
        "slug": "achillea-millefolium",
        "scientific_name": "Achillea millefolium",
        "year": 1753,
        "bibliography": "Sp. Pl.: 899 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 44,
        "image_url": "https://bs.floristic.org/image/o/d8bdcc8a8328551e6e6ce50129e8e7a871b6b3a5",
        "synonyms": ["Achillea millefolium var. parvula", "Achillea millefolium var. litoralis", "Achillea millefolium var. aspleniifolia", "Achillea borealis", "Achillea millefolium var. gracilis", "Achillea subalpina", "Achillea alpicola", "Achillea millefolium var. nigrescens", "Achillea lanulosa var. arachnoidea", "Achillea eradiata", "Achillea californica", "Achillea puberula", "Achillea pacifica", "Achillea millefolium var. arenicola", "Achillea millefolium var. fulva", "Achillea occidentalis", "Achillea millefolium var. gigantea", "Achillea fusca", "Achillea laxiflora", "Achillea millefolium var. parviligula", "Achillea borealis var. arenicola", "Achillea millefolium var. fusca", "Achillea millefolium var. russeolata", "Achillea millefolium var. rosea", "Achillea arenicola", "Achillea rosea", "Achillea lanulosa", "Achillea millefolium var. lanulosa", "Achillea lanulosa var. eradiata", "Achillea gigantea", "Achillea nigrescens", "Achillea millefolium var. californica", "Achillea angustissima", "Achillea lanulosa var. alpicola", "Achillea millefolium var. alpicola", "Achillea millefolium var. megacephala", "Achillea borealis var. californica", "Achillea dentifera", "Achillea tanacetifolia", "Achillea pectinata", "Achillea borealis subsp. arenicola", "Achillea millefolium [unranked] lanulosa", "Achillea lanulosa subsp. alpicola", "Achillea borealis subsp. californica", "Achillea megacephala", "Achillea millefolium var. asplenifolia", "Achillea millefolium subsp. occidentalis", "Achillea millefolium subsp. borealis", "Achillea pecten-veneris", "Achillea millefolium subsp. pannonica", "Achillea palmeri", "Achillea compacta", "Achillea millefolium var. manshurica", "Achillea lanata", "Achillios millefoliatus", "Achillea millefolium f. californica", "Achillea millefolium f. roseoides", "Achillea millefolium subsp. atrotegula", "Achillea millefolium subsp. pallidotegula", "Achillea lanulosa subsp. typica", "Achillea millefolium subsp. lanulosa", "Achillea borealis subsp. typica", "Achillea lanulosa subsp. megacephala", "Achillea millefolium var. sordida", "Achillea nabelekii", "Achillea ossica", "Achillea pseudotanacetifolia", "Achillea ceretanica", "Achillea millefolium var. lobata", "Achillea millefolium f. discolor", "Achillea millefolium var. sylvatica", "Achillea polyphylla", "Achillea millefolium f. albiflora", "Achillea scabra", "Achillea submellifolium", "Achillea coronopifolia", "Achillea millefolium f. roseiflora", "Achillea millefolium subsp. balearica", "Achillea anethifolia", "Chamaemelum tanacetifolium", "Achillea tenuis", "Achillea millefolium var. purpurea", "Millefolium officinale", "Achillea millefolium f. pseudopannonica", "Achillea millefolium var. iserana", "Achillea millefolium f. iserana", "Achillea intermedia", "Achillea cuspidata", "Achillea albicaulis", "Achillea millefolium f. rhodantha", "Ptarmica borealis", "Alitubus millefolium", "Achillea millefolium subvar. parviligulata", "Achillea millefolium var. dissecta", "Achillea haenkeana", "Achillea marginata", "Achillea virgata", "Achillea millefolium var. colliniformis", "Achillea millefolium var. densiloba", "Santolina millefolium", "Achillea albida", "Achillea millefolium var. lanata", "Achillea tanacetifolia var. dentifera", "Achillea subhirsuta", "Achillea bicolor", "Achillea millefolium var. spathulata", "Achillea lanulosa f. rubicunda", "Achillea fililoba", "Millefolium setaceum", "Achillea multifida", "Ptarmica pectinata", "Anthemis pseudoatrata", "Achillea microloba", "Ptarmica tenuifolia", "Anthemis caespitosa", "Anthemis tenuifolia", "Alitubus tomentosus", "Achillea tenuifolia", "Achillea millefolium f. rosea", "Achillea millefolium var. dipetala", "Chamaemelum millefolium", "Achillea setacea", "Millefolium vulgare", "Achillea millefolium var. borealis", "Achillea sordida", "Achillea millefolium var. pacifica", "Achillea millefolium f. rubicunda", "Achillea millefolium var. occidentalis", "Achillea borealis f. fusca", "Achillea ochroleuca", "Achillea pratensis", "Achillea millefolium var. puberula", "Achillea borealis var. fusca", "Achillea setacea f. ramosa", "Achillea magna", "Achillea millefolium var. setacea", "Chamaemelum tomentosum", "Achillea sylvatica", "Achillea tomentosa", "Achillea ambigua", "Achillea cristata", "Millefolium tomentosum", "Achillea lanulosa f. peroutkyi", "Achillea gracilis", "Achillea crassifolia", "Achillea millefolium var. maritima", "Achillea atrata subsp. multifida", "Achillea millefolium var. alpestris", "Achillea sudetica", "Achillea lanulosa subsp. lanulosa", "Achillea capillaris", "Achillea salina", "Achillea crustata", "Achillea millefolium subsp. alpestris", "Achillea millefolium subsp. serpentini", "Achillea millefolium subsp. sudetica"],
        "genus": "Achillea",
        "family": "Asteraceae",
        "links": {
            "self": "/api/v1/species/achillea-millefolium",
            "plant": "/api/v1/plants/achillea-millefolium",
            "genus": "/api/v1/genus/achillea"
        }
    }, {
        "id": 167888,
        "common_name": "Narrowleaf plantain",
        "slug": "plantago-lanceolata",
        "scientific_name": "Plantago lanceolata",
        "year": 1753,
        "bibliography": "Sp. Pl.: 113 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Plantain family",
        "genus_id": 5418,
        "image_url": "https://bs.floristic.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b",
        "synonyms": ["Plantago lanceolata var. sphaerostachya", "Plantago azorica", "Plantago glareosa", "Plantago lanceolata var. lanuginosa", "Plantago trinervis", "Plantago dubia", "Plantago lanuginosa", "Plantago kurdica", "Plantago nutans", "Plantago orientalis", "Plantago leiopetala", "Plantago capitata", "Plantago lanceolata var. dubia", "Plantago longiscapa", "Plantago ambigua", "Plantago glauca", "Plantago pseudopatagonica", "Plantago eriophora", "Plantago attenuata", "Plantago hungarica", "Plantago variabilis", "Plantago preslii", "Plantago contorta", "Plantago yezomaritima", "Plantago schottii", "Plantago elata", "Plantago linkii", "Lagopus timbali", "Lagopus lanceolatus", "Plantago byzantina", "Plantago sylvatica", "Arnoglossum lanceolatum", "Plantago fontis-curvae", "Plantago glabriflora", "Plantago succisa", "Plantago flexuosa", "Plantago lanceolata var. minor"],
        "genus": "Plantago",
        "family": "Plantaginaceae",
        "links": {
            "self": "/api/v1/species/plantago-lanceolata",
            "plant": "/api/v1/plants/plantago-lanceolata",
            "genus": "/api/v1/genus/plantago"
        }
    }, {
        "id": 173327,
        "common_name": "English oak",
        "slug": "quercus-robur",
        "scientific_name": "Quercus robur",
        "year": 1753,
        "bibliography": "Sp. Pl.: 996 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Beech family",
        "genus_id": 5778,
        "image_url": "https://bs.floristic.org/image/o/2292b670683abdaac354389514105df0018d9ef8",
        "synonyms": ["Quercus longaeva", "Quercus salicifolia", "Quercus pedemontana", "Quercus pseudoschorochensis", "Quercus robur f. globulata", "Quercus robur subsp. asterotricha", "Quercus axillaris", "Quercus microcarpa", "Quercus dalechampii f. rubens", "Quercus dalechampii var. aurea", "Quercus dalechampii f. piersii", "Quercus dalechampii f. macroloba", "Quercus dalechampii f. lancifolia", "Quercus strigosa", "Quercus mexicana var. glabrata", "Quercus castanea var. glabrata", "Quercus tahuasalana", "Quercus duratifolia", "Cerris salicifolia", "Quercus acapulcensis", "Quercus turbinata", "Quercus dilatata", "Quercus aurea", "Quercus subvelutina", "Quercus avellanoides", "Quercus cuprea", "Quercus purpurea", "Quercus hyemalis", "Quercus bellogradensis", "Quercus malacophylla", "Quercus fructipendula", "Quercus monorensis", "Quercus fennessii", "Quercus extensa", "Quercus dissecta", "Quercus tardiflora", "Quercus atropurpurea", "Quercus pyramidalis", "Quercus pseudosessilis", "Quercus geltowiensis", "Quercus palmata", "Quercus farinosa", "Quercus comptoniifolia", "Quercus sieboldii", "Quercus nigricans", "Quercus condensata", "Quercus lasistan", "Quercus coriifolia", "Quercus hispanica", "Quercus horizontalis", "Quercus rubicunda", "Quercus scolopendrifolia", "Quercus robur var. patellulata", "Quercus viminalis", "Quercus bedoi", "Quercus pendulina", "Quercus robur f. subpraecox", "Quercus parmenteria", "Quercus auzin", "Quercus cupulatus", "Quercus pulverulenta", "Quercus pendula", "Quercus longiglans", "Quercus pseudotscharakensis", "Quercus asterotricha", "Quercus robur f. brachybalanus", "Quercus bruttia", "Quercus robur f. subglobosa", "Quercus castanoides", "Quercus rubens", "Quercus haas", "Quercus speciensis", "Quercus falkenbergensis", "Quercus aesculus", "Quercus filipendula", "Quercus annenkowii", "Quercus abbreviata", "Quercus tennesi", "Quercus germanica", "Quercus cylindracea", "Quercus welandii", "Quercus tricolor", "Quercus tozzae", "Quercus tetracarpa", "Quercus paleacea", "Quercus atrovirens", "Quercus robur f. sphaerobalanus", "Quercus virgata", "Quercus rumelica", "Quercus aestivalis", "Quercus robur subsp. slavonica", "Quercus fastigiata", "Quercus altissima", "Quercus brossa", "Quercus pyrenaica f. sphaerocarpa", "Quercus tauzinii", "Quercus toza", "Quercus tauza", "Quercus camata", "Quercus lezermiana", "Quercus robur var. tardissima", "Quercus svecica", "Quercus robur f. crassiuscula", "Quercus pyrenaica", "Quercus banatus", "Quercus australis", "Quercus pyrenaica f. expansa", "Quercus pyrenaica f. stenocarpa", "Quercus racemosa", "Quercus lanuginosa", "Quercus brevipes", "Quercus robur f. fastigiata", "Quercus estremadurensis", "Quercus acherdophylla", "Quercus robur subsp. broteroana", "Quercus rubramenta", "Quercus dalechampii f. apatini", "Quercus stolonifera", "Quercus pyrenaica f. normalis", "Quercus cenomanensis", "Quercus tauzin"],
        "genus": "Quercus",
        "family": "Fagaceae",
        "links": {
            "self": "/api/v1/species/quercus-robur",
            "plant": "/api/v1/plants/quercus-robur",
            "genus": "/api/v1/genus/quercus"
        }
    }, {
        "id": 137025,
        "common_name": "Red fescue",
        "slug": "festuca-rubra",
        "scientific_name": "Festuca rubra",
        "year": 1753,
        "bibliography": "Sp. pl. 1:74.  1753",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Grass family",
        "genus_id": 1102,
        "image_url": "https://bs.floristic.org/image/o/d073c0ecfeb2f69248e9102eb6ec10f8ccc628cb",
        "synonyms": ["Festuca rubra var. arenaria", "Bromus secundus", "Festuca kitaibeliana", "Festuca rubra var. lanuginosa", "Festuca michiganica", "Festuca pseudovivipara", "Festuca fallax", "Festuca rubra var. mediana", "Festuca ammobia", "Festuca aucta", "Festuca densiuscula", "Festuca vallicola", "Festuca ovina subsp. glauca", "Festuca calcarea", "Festuca rivularis subsp. pseudorivularis", "Festuca glauca", "Festuca heterophylla var. subheterophylla", "Festuca glabra", "Festuca oregona", "Festuca halleri", "Festuca iberica subsp. atlantigena", "Festuca clarkei", "Festuca alpestris", "Festuca rubra subsp. thessalica", "Festuca rubra subsp. yvesiana", "Festuca longifolia", "Festuca lanuginosa", "Festuca daghestanica", "Festuca rubra subsp. sochondinensis", "Festuca rubra subsp. villosa", "Festuca rubra var. glabra", "Festuca pratensis", "× Festulolium ascendens", "Schedonorus radicans", "Festuca villosa", "Festuca glaucescens", "Festuca rubra subsp. fraterculae", "Festuca rubra subsp. glaucodea", "Festuca rubra var. radnensis", "Festuca subcontorta", "Festuca kirelowii", "Festuca nankotaizanensis", "Festuca atlantigena", "Festuca viridis", "Festuca pseudorubra", "Festuca rubra subsp. pruinosa", "Festuca baicalensis", "Festuca rubra subsp. vallicola", "Festuca rubra subsp. pseudorivularis", "Festuca aurasiaca", "Festuca rubra var. atlantigena", "Festuca rubra f. dasyphylla", "Festuca rubra subsp. kirelowii", "Festuca alexeevii", "Schedonorus dumetorum", "Festuca waldsteinii", "Festuca rubra f. pseudovivipara", "Festuca rubra subsp. eriantha", "Festuca septiflora", "Festuca rubra f. littoralis", "Avena dura", "Festuca rubra subsp. kitaibeliana", "Festuca rubra f. subheterophylla", "Festuca iberica subsp. yvesiana", "Festuca rubra var. caulispicula", "Festuca rubra subsp. densiuscula", "Festuca rubra var. altaica", "Festuca briquetii", "Gramen rubrum", "Festuca rubra var. pauciflora", "Festuca baicalensis var. tjulinae", "Festuca inopoda", "Festuca limosa", "Festuca pruinosa", "Festuca rubra f. longifolia", "Festuca rubra f. glabra", "Festuca eriantha", "Festuca baltica", "Festuca rubra subsp. scotica", "Festuca ovina subsp. major", "Festuca rubra subvar. grandiflora", "Festuca polyantha", "Festuca repens", "Festuca rubra subsp. baicalensis", "Festuca subglaucescens", "Festuca egena", "Festuca steineri", "Festuca pseudonemorum", "Festuca rubra subsp. arenaria", "Festuca rubra f. pilosa", "Festuca helgolandica", "Festuca rubra var. atrata", "Festuca alexeevii var. villispiculata", "Festuca rubra subsp. limosa", "Festuca rubra var. magnelii", "Festuca rubra var. secunda", "Festuca salina", "Festuca rubra subsp. secunda", "Festuca rubra subvar. pruinosa", "Festuca rubra var. glabrata", "Festuca rubra subsp. pluriflora", "Festuca rubra var. clarkei", "Festuca askelofiana", "Festuca rubra subsp. glabra", "Festuca musashiensis", "Festuca balearica", "Festuca communis", "Festuca alpigena", "Festuca rubra subsp. daghestanica", "Festuca hondoensis", "Festuca rubra f. caespitosa", "Festuca rubra subvar. glaucescens", "Festuca pallidiuscula", "Festuca unifaria var. izhorica", "Festuca paucispicula", "Festuca cambrica", "Festuca planifolia", "Poa tenuifolia var. oregona", "Festuca rubra subvar. dasyphylla", "Festuca paucispiculata", "Festuca rubra var. yvesiana", "Festuca unifaria", "Festuca rubra subvar. densiuscula", "Festuca rubra subvar. barbata", "Festuca rubra f. psilolemma", "Festuca siracusana", "Festuca villiflora", "Festuca yvesiana", "Festuca rubra subsp. lanuginosa", "Festuca polonica", "Festuca longiseta", "Festuca niitakensis", "Festuca americana", "Festuca spiciformis", "Festuca plonkae", "Festuca corsica", "Festuca halleri subsp. yvesii", "Festuca halleri subsp. scardica", "Festuca gaudinii", "Festuca austrodolomitica", "Festuca halleri var. tenuis", "Festuca decipiens", "Festuca ovina var. alpestris", "Festuca strictifolia", "Festuca veneris", "Festuca eragrostoides", "Festuca rubra var. megastachys", "Festuca ovina var. duriuscula", "Festuca rubra var. grandiflora", "Festuca rubra var. commutata", "Festuca rubra var. littoralis", "Festuca rubra var. pruinosa", "Festuca rubra var. juncea", "Lolium pratense", "Festuca rubra subsp. aucta", "Festuca rubra subsp. commutata", "Festuca rubra subsp. arenicola", "Festuca rubra subsp. vulgaris", "Festuca rubra f. grandiflora", "Festuca rubra subsp. fallax", "Festuca rubra subsp. mediana", "Festuca rubra subsp. juncea", "Vulpia australis", "Vulpia eriolepis f. glabrata", "Festuca arctica", "Festuca muralis", "Vulpia muralis var. spicata", "Lolium apenninum", "Schedonorus pratensis subsp. apenninus", "Lolium pratense subsp. apenninum", "Festuca hybrida", "Vulpia hybrida", "Vulpia broteri", "Vulpia muralis", "Festuca broteri", "Festuca apennina", "Schedonorus apenninus", "Lolium appenninum", "Festuca australis", "Festuca fluitans var. pratensis", "Schedonorus pratensis", "Schedonorus curvatus", "Bucetum pratense", "Schedonorus americanus", "Festuca pratensis f. mucronata", "Festuca adscendens", "Festuca pratensis f. parvillora", "Festuca heteromalla", "Tragus pratensis", "Festuca pratensis f. macrostachya", "Festuca radicans", "Festuca curvata"],
        "genus": "Festuca",
        "family": "Poaceae",
        "links": {
            "self": "/api/v1/species/festuca-rubra",
            "plant": "/api/v1/plants/festuca-rubra",
            "genus": "/api/v1/genus/festuca"
        }
    }, {
        "id": 173910,
        "common_name": "Creeping buttercup",
        "slug": "ranunculus-repens",
        "scientific_name": "Ranunculus repens",
        "year": 1753,
        "bibliography": "Sp. Pl.: 554 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Buttercup family",
        "genus_id": 1607,
        "image_url": "https://bs.floristic.org/image/o/c6d9a5222b6ef0e3a7bdef3350278718d3097bce",
        "synonyms": ["Ranunculus repens var. erectus", "Ranunculus repens var. pleniflorus", "Ranunculus repens var. glabratus", "Ranunculus repens var. linearilobus", "Ranunculus schlechtendalii", "Ranunculus oenanthifolius", "Ranunculus lucidus", "Ranunculus semidecurrens", "Ranunculus repens f. polypetalus", "Ranunculus repens f. schlechtendalii", "Ranunculastrum reptabundum", "Ranunculastrum repens", "Ranunculus caleyanus", "Ranunculus clintonii", "Ranunculus belvisii", "Ranunculus prostratus", "Ranunculus lagascanus", "Ranunculus repens var. degeneratus", "Ranunculus repens var. typicus", "Ranunculus repens var. villosus"],
        "genus": "Ranunculus",
        "family": "Ranunculaceae",
        "links": {
            "self": "/api/v1/species/ranunculus-repens",
            "plant": "/api/v1/plants/ranunculus-repens",
            "genus": "/api/v1/genus/ranunculus"
        }
    }, {
        "id": 143075,
        "common_name": "Common velvetgrass",
        "slug": "holcus-lanatus",
        "scientific_name": "Holcus lanatus",
        "year": 1753,
        "bibliography": "Sp. Pl.: 1048 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Grass family",
        "genus_id": 1064,
        "image_url": "https://bs.floristic.org/image/o/46619775d4319328b2fad6f1ba876ccca2d03534",
        "synonyms": ["Nothoholcus lanatus", "Holcus lanatus subsp. vaginatus", "Notholcus lanatus", "Ginannia pubescens", "Holcus lanatus var. sobolifer", "Holcus tuberosus", "Holcus aestivalis", "Holcus oriolis", "Holcus argenteus", "Aira holcus-lanata", "Holcus lanatus var. vaginatus", "Ginannia lanata", "Holcus lanatus subsp. tuberosus", "Holcus lanatus var. tuberosus", "Holcus intermedius", "Holcus lanatus f. viviparus", "Holcus glaucus"],
        "genus": "Holcus",
        "family": "Poaceae",
        "links": {
            "self": "/api/v1/species/holcus-lanatus",
            "plant": "/api/v1/plants/holcus-lanatus",
            "genus": "/api/v1/genus/holcus"
        }
    }, {
        "id": 189539,
        "common_name": "White clover",
        "slug": "trifolium-repens",
        "scientific_name": "Trifolium repens",
        "year": 1753,
        "bibliography": "Sp. Pl.: 767 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Pea family",
        "genus_id": 5044,
        "image_url": "https://bs.floristic.org/image/o/c766ed84c547abac6021244bc0014d665ba7726f",
        "synonyms": ["Amoria repens", "Trifolium repens var. atropurpureum", "Trifolium repens subsp. repens", "Trifolium repens var. giganteum"],
        "genus": "Trifolium",
        "family": "Fabaceae",
        "links": {
            "self": "/api/v1/species/trifolium-repens",
            "plant": "/api/v1/plants/trifolium-repens",
            "genus": "/api/v1/genus/trifolium"
        }
    }, {
        "id": 137834,
        "common_name": "European ash",
        "slug": "fraxinus-excelsior",
        "scientific_name": "Fraxinus excelsior",
        "year": 1753,
        "bibliography": "Sp. Pl.: 1057 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Olive family",
        "genus_id": 3064,
        "image_url": "https://bs.floristic.org/image/o/84ef20b0276c3e0a6d32dd97a7b987b510feb961",
        "synonyms": ["Fraxinus excelsior var. communis", "Fraxinus excelsior var. pendula", "Fraxinus ochrochlora", "Ornus strigata", "Fraxinus excelsior f. digitata", "Fraxinus lucida", "Fraxinus polemonifolia", "Fraxinus streptocarpa", "Fraxinus excelsior var. angustifolia", "Fraxinus steudelii", "Fraxinus purpurascens", "Fraxinus atrovirens", "Fraxinus bumelia", "Fraxinus oxyodon", "Fraxinus linearis", "Fraxinus retorta", "Fraxinus globosa", "Fraxinus baurieri", "Aplilia laciniata", "Fraxinus excelsior f. multifoliolata", "Fraxinus integrifolia", "Fraxinus concavifolia", "Leptalix atrovirens", "Fraxinus strigata", "Fraxinus fungosa", "Fraxinus scolopendrium", "Fraxinus eliae", "Fraxinus ceretanica", "Fraxinus ararica", "Fraxinus acutifolia", "Fraxinus brevidentata", "Fraxinus atra", "Fraxinus pumila", "Fraxinus cucullata", "Fraxinus crispa", "Fraxinus simplicifolia", "Fraxinus glomerata", "Fraxinus boitrayana", "Aplilia pendula", "Fraxinus exoniensis", "Fraxinus heterophylla", "Fraxinus apetala", "Fraxinus amarissima", "Fraxinus stenobotrys", "Fraxinus spectabilis", "Fraxinus dodei", "Fraxinus biloba", "Ornus striata", "Fraxinus excelsior f. angustifolia", "Leptalix nana", "Fraxinus longisamara", "Fraxinus burgalensis", "Fraxinus aurea", "Fraxinus humilis", "Fraxinus subcordata", "Fraxinus microphylla", "Fraxinus scolopendrifolia", "Fraxinus boscii", "Fraxinus appendiculata", "Fraxinus nana", "Fraxinus grandifolia", "Fraxinus intermedia"],
        "genus": "Fraxinus",
        "family": "Oleaceae",
        "links": {
            "self": "/api/v1/species/fraxinus-excelsior",
            "plant": "/api/v1/plants/fraxinus-excelsior",
            "genus": "/api/v1/genus/fraxinus"
        }
    }, {
        "id": 124198,
        "common_name": "Oneseed hawthorn",
        "slug": "crataegus-monogyna",
        "scientific_name": "Crataegus monogyna",
        "year": 1775,
        "bibliography": "Fl. Austriac. 3: 50 (1775)",
        "author": "Jacq.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Rose family",
        "genus_id": 678,
        "image_url": "https://bs.floristic.org/image/o/f3ca7a240ea7d0f6c011a3259f783c7b82f10dc8",
        "synonyms": ["Crataegus insegnae", "Mespilus insegnae", "Mespilus crataegus", "Mespilus elegans", "Mespilus heterophylla", "Crataegus triloba", "Crataegus monogyna var. dissecta", "Oxyacantha elegans", "Mespilus brevispina", "Crataegus brevispina", "Crataegus monogyna var. lasiocarpa", "Crataegus azarella", "Crataegus monogyna var. microphylla", "Crataegus dissecta", "Crataegus monogyna var. nordica", "Crataegus apiifolia", "Mespilus maura", "Mespilus constantinopolitana", "Crataegus maura", "Crataegus heterophylla", "Oxyacantha azarella", "Crataegus aegeica", "Crataegus monogyna subsp. nordica", "Mespilus triloba", "Oxyacantha apiifolia", "Oxyacantha monogyna", "Mespilus monogyna", "Crataegus lasiocarpa", "Crataegus stevenii"],
        "genus": "Crataegus",
        "family": "Rosaceae",
        "links": {
            "self": "/api/v1/species/crataegus-monogyna",
            "plant": "/api/v1/plants/crataegus-monogyna",
            "genus": "/api/v1/genus/crataegus"
        }
    }, {
        "id": 189529,
        "common_name": "Red clover",
        "slug": "trifolium-pratense",
        "scientific_name": "Trifolium pratense",
        "year": 1753,
        "bibliography": "Sp. Pl.: 768 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Pea family",
        "genus_id": 5044,
        "image_url": "https://bs.floristic.org/image/o/7eb243363838c9975c57204057e63fa8101c26d8",
        "synonyms": ["Trifolium pratense var. sativum", "Lagopus pratensis", "Trifolium nivale", "Trifolium glareosum", "Trifolium villosum", "Ononis trifoliata", "Trifolium transsilvanicum", "Trifolium pratense var. variegatum", "Trifolium expansum", "Trifolium pratense var. evariegatum", "Trifolium ucrainicum", "Trifolium pratense subsp. expansum", "Trifolium foliosum", "Trifolium leucophaeum", "Trifolium officinarum", "Trifolium abbreviatum", "Trifolium carpathicum", "Trifolium vaginatum", "Trifolium lenkoranicum", "Trifolium pratense var. foliosum", "Trifolium brachyanthum", "Trifolium capillatum", "Trifolium borderi", "Trifolium heterophyllum", "Trifolium alpicola", "Trifolium seravschanicum", "Trifolium arizagae", "Trifolium bracteatum", "Trifolium brachystylos", "Trifolium pensylvanicum f. albiflorum", "Trifolium sativum", "Trifolium pratense subsp. serotinum", "Trifolium pratense subsp. semipurpureum", "Trifolium purpureum", "Trifolium pratense f. lilacinum", "Trifolium microphyllum"],
        "genus": "Trifolium",
        "family": "Fabaceae",
        "links": {
            "self": "/api/v1/species/trifolium-pratense",
            "plant": "/api/v1/plants/trifolium-pratense",
            "genus": "/api/v1/genus/trifolium"
        }
    }, {
        "id": 173587,
        "common_name": "Tall buttercup",
        "slug": "ranunculus-acris",
        "scientific_name": "Ranunculus acris",
        "year": 1753,
        "bibliography": "Sp. Pl.: 554 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Buttercup family",
        "genus_id": 1607,
        "image_url": "https://bs.floristic.org/image/o/8390d605e1947cb44e24af9492f96df4a34e8ca8",
        "synonyms": ["Ranunculus acris var. minimus", "Ranunculus mccallae", "Ranunculastrum vulgatum", "Ranunculus siculus", "Ranunculus csatoi", "Ranunculastrum acre", "Ranunculus acris var. multifidus", "Ranunculus acris f. multiplicipetalus", "Ranunculus stevenii", "Ranunculus pascuicola", "Ranunculus buergeri", "Ranunculus franchetianus", "Ranunculus stipatus", "Ranunculus kerneri", "Ranunculus trachyticus", "Ranunculus cammarifolius", "Ranunculus kayseri", "Ranunculus paradoxus", "Ranunculastrum nemorivagum", "Ranunculus sylvaticus", "Ranunculus tomophyllus", "Ranunculus acris var. filiformis", "Ranunculus colocensis", "Ranunculastrum boraeanum", "Ranunculus silvaticus", "Ranunculus barthii", "Ranunculus boraeanus", "Ranunculus intercedens", "Ranunculus nemorivagus", "Ranunculus rectus", "Ranunculus major", "Ranunculus subalpinus", "Ranunculus vulgatus", "Ranunculus acris var. sylvaticus", "Ranunculus malacophyllus", "Ranunculus platyphyllus", "Ranunculus eustrigulosus", "Ranunculus transsilvanicus", "Ranunculus acris var. acris", "Ranunculus acris var. typicus", "Ranunculus acris var. latisectus", "Ranunculus boreanus", "Ranunculus acris subsp. pumilus"],
        "genus": "Ranunculus",
        "family": "Ranunculaceae",
        "links": {
            "self": "/api/v1/species/ranunculus-acris",
            "plant": "/api/v1/plants/ranunculus-acris",
            "genus": "/api/v1/genus/ranunculus"
        }
    }, {
        "id": 123486,
        "common_name": "Common filbert",
        "slug": "corylus-avellana",
        "scientific_name": "Corylus avellana",
        "year": 1753,
        "bibliography": "Sp. Pl.: 998 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Birch family",
        "genus_id": 2057,
        "image_url": "https://bs.floristic.org/image/o/0d92cadb0d66dce1b0a8b26913125d6501e31d68",
        "synonyms": ["Corylus sylvestris", "Corylus ovata", "Corylus pumila", "Corylus quercifolia", "Corylus ardua", "Corylus arborea", "Corylus pontica", "Corylus avellana f. microphylla", "Corylus urticifolia", "Corylus avellana var. macrotruncus", "Corylus alba", "Corylus serenyiana", "Corylus filicifolia", "Corylus avellana f. peltata"],
        "genus": "Corylus",
        "family": "Betulaceae",
        "links": {
            "self": "/api/v1/species/corylus-avellana",
            "plant": "/api/v1/plants/corylus-avellana",
            "genus": "/api/v1/genus/corylus"
        }
    }, {
        "id": 136773,
        "common_name": "European beech",
        "slug": "fagus-sylvatica",
        "scientific_name": "Fagus sylvatica",
        "year": 1753,
        "bibliography": "Sp. Pl.: 998 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Beech family",
        "genus_id": 2976,
        "image_url": "https://bs.floristic.org/image/o/a733221df31a1ff99af03566841744f3b4c6cffe",
        "synonyms": ["Fagus purpurea", "Fagus sylvestris", "Fagus sylvatica var. purpurea", "Fagus sylvatica var. quercifolia", "Fagus sylvatica var. vulgaris", "Fagus echinata", "Castanea fagus", "Fagus incisa", "Fagus laciniata", "Fagus cochleata", "Fagus sylvatica var. zlatia", "Fagus comptoniifolia", "Fagus cuprea"],
        "genus": "Fagus",
        "family": "Fagaceae",
        "links": {
            "self": "/api/v1/species/fagus-sylvatica",
            "plant": "/api/v1/plants/fagus-sylvatica",
            "genus": "/api/v1/genus/fagus"
        }
    }, {
        "id": 146208,
        "common_name": "Common rush",
        "slug": "juncus-effusus",
        "scientific_name": "Juncus effusus",
        "year": 1753,
        "bibliography": "Sp. Pl.: 326 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Rush family",
        "genus_id": 3848,
        "image_url": "https://bs.floristic.org/image/o/bab95d74bfaeb9f6a736cf35d048e46cc6624d50",
        "synonyms": ["Juncus communis", "Juncus communis var. effusus", "Juncus laevis", "Tristemon conglomeratus", "Juncus lucens", "Juncus mauritianus", "Juncus bogotensis var. compactus", "Scirpus capsularis", "Juncus luxurians", "Juncus bogotensis", "Juncus zebrinus", "Juncus fistulosus", "Juncus effusus var. compactus", "Juncus effusus var. effusus", "Juncus effusus var. subglomeratus"],
        "genus": "Juncus",
        "family": "Juncaceae",
        "links": {
            "self": "/api/v1/species/juncus-effusus",
            "plant": "/api/v1/plants/juncus-effusus",
            "genus": "/api/v1/genus/juncus"
        }
    }, {
        "id": 176845,
        "common_name": "Garden sorrel",
        "slug": "rumex-acetosa",
        "scientific_name": "Rumex acetosa",
        "year": 1753,
        "bibliography": "Sp. pl. 1:337.  1753, nom. cons.",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Buckwheat family",
        "genus_id": 2722,
        "image_url": "https://bs.floristic.org/image/o/780b9f3c63318588b8874d608c2d4900fc2adce3",
        "synonyms": ["Acetosa pratensis subsp. fontanopaludosa", "Acetosa officinalis", "Rumex planellae", "Lapathum pratense", "Rumex fontanopaludosus", "Rumex triangularis", "Acetosa angustata", "Acetosa amplexicaulis", "Rumex oxyotus", "Acetosa hastulata", "Rumex oblongus", "Acetosa bidentula", "Acetosa olitoria", "Rumex acetosa subsp. biformis", "Acetosa pratensis subsp. biformis", "Rumex angustatus", "Rumex micranthus", "Acetosa subalpina", "Acetosa hastifolia", "Rumex pseudoacetosa", "Rumex commersonii", "Acetosa fontanopaludosa", "Rumex olitoria", "Acetosa agrestis", "Rumex agrestis", "Rumex acuminatus", "Rumex sagittifolius", "Rumex biformis", "Rumex bidentula", "Acetosa pratensis", "Rumex bulbosus", "Lapathum acetosa"],
        "genus": "Rumex",
        "family": "Polygonaceae",
        "links": {
            "self": "/api/v1/species/rumex-acetosa",
            "plant": "/api/v1/plants/rumex-acetosa",
            "genus": "/api/v1/genus/rumex"
        }
    }, {
        "id": 105790,
        "common_name": "Sweet vernalgrass",
        "slug": "anthoxanthum-odoratum",
        "scientific_name": "Anthoxanthum odoratum",
        "year": 1753,
        "bibliography": "Sp. Pl.: 28 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Grass family",
        "genus_id": 499,
        "image_url": "https://bs.floristic.org/image/o/fcf64ef0676db8ca9d2abf4017f5b8211b10e0b1",
        "synonyms": ["Anthoxanthum odoratum f. montanum", "Anthoxanthum odoratum f. tenerum", "Anthoxanthum sommierianum", "Anthoxanthum maderense", "Xanthonanthos odoratus", "Anthoxanthum pauciflorum", "Anthoxanthum asperum", "Anthoxanthum nebrodense"],
        "genus": "Anthoxanthum",
        "family": "Poaceae",
        "links": {
            "self": "/api/v1/species/anthoxanthum-odoratum",
            "plant": "/api/v1/plants/anthoxanthum-odoratum",
            "genus": "/api/v1/genus/anthoxanthum"
        }
    }, {
        "id": 137183,
        "common_name": "Queen of the meadow",
        "slug": "filipendula-ulmaria",
        "scientific_name": "Filipendula ulmaria",
        "year": 1879,
        "bibliography": "Trudy Imp. S.-Peterburgsk. Bot. Sada 6: 251 (1879)",
        "author": "(L.) Maxim.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Rose family",
        "genus_id": 3008,
        "image_url": "https://bs.floristic.org/image/o/168ee7151e03184eaa0ae4d4ed31f8a0131e39f6",
        "synonyms": ["Spiraea ulmaria", "Filipendula denudata", "Filipendula ulmaria var. denudata", "Filipendula ulmaria subsp. megalocarpa", "Filipendula ulmaria subsp. denudata", "Spiraea denudata", "Spiraea filipendula var. tomentosa", "Spiraea ulmaria var. denudata", "Ulmaria glauca", "Ulmaria quinqueloba", "Ulmaria pentapetala", "Ulmaria ulmaria", "Ulmaria vulgaris", "Ulmaria denudata", "Filipendula megalocarpa", "Spiraea contorta", "Filipendula ulmaria var. tomentosa", "Filipendula ulmaria var. glaberrima"],
        "genus": "Filipendula",
        "family": "Rosaceae",
        "links": {
            "self": "/api/v1/species/filipendula-ulmaria",
            "plant": "/api/v1/plants/filipendula-ulmaria",
            "genus": "/api/v1/genus/filipendula"
        }
    }],
    "links": {
        "self": "/api/v1/species",
        "first": "/api/v1/species?page=1",
        "next": "/api/v1/species?page=2",
        "last": "/api/v1/species?page=20348"
    },
    "meta": {
        "total": 406941
    }
}

/*
* Parse object to display total in data array.
* Create a collection of 'common names'.
* Display next and last links.
*/



function commonNames(species) {
    for (let i = 0; i < species.data.length; i++) {
        $('#results-list').append(`<li>
        <p><strong>Common Name: </strong>${species.data[i].common_name}</p></li>`);
    };
}

function displayDataTotal() {
return $('#total').append(`<h2>Total: ${species.meta.total}</h2>`);
}

function displayNextLast() {
    return $('#next-last-list').append(`<li><h2>Next: ${species.links.next}</h2>
    <h2>Last: ${species.links.last}</h2></li>`);
    }

function queryCommonNames() {
    $('#common-names').on('submit', function(event) {
        event.preventDefault();
        commonNames(species);
    });
}

function queryDataTotal() {
    $('#data-total').on('submit', function(event) {
        event.preventDefault();
        displayDataTotal();
    });
}

function queryNextLast() {
    $('#next-last').on('submit', function(event) {
        event.preventDefault();
        displayNextLast();
    });
}

$(queryCommonNames());
$(queryDataTotal());
$(queryNextLast());