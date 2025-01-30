// Update Maryland GPS coordinates

const sourcePlaces = [{
        name: "STRATFORD INTERNATIONAL",
        pt: [51.54571, -0.00936]
    },
    {
        name: "PUDDING MILL LANE",
        pt: [51.53157, -0.01657]
    },
    {
        name: "ALL SAINTS",
        pt: [51.51102, -0.01303]
    },
    {
        name: "BANK",
        pt: [51.5133, -0.0886]
    },
    {
        name: "STRATFORD",
        pt: [51.5416, -0.0038]
    },
    {
        name: "STRATFORD HIGH STREET",
        pt: [51.53799, -0.00062]
    },
    {
        name: "ABBEY ROAD",
        pt: [51.53254, 0.00376]
    },
    {
        name: "BOW CHURCH",
        pt: [51.52759, -0.02087]
    },
    {
        name: "WEST HAM",
        pt: [51.52724, 0.00435]
    },
    {
        name: "DEVONS ROAD",
        pt: [51.5222, -0.0176]
    },
    {
        name: "LANGDON PARK",
        pt: [51.5158, -0.0153]
    },
    {
        name: "TOWER GATEWAY",
        pt: [51.51, -0.0741]
    },
    {
        name: "SHADWELL",
        pt: [51.5115, -0.0562]
    },
    {
        name: "LIMEHOUSE",
        pt: [51.5127, -0.0395]
    },
    {
        name: "CANARY WHARF",
        pt: [51.5035, -0.0185]
    },
    {
        name: "WESTFERRY",
        pt: [51.5096, -0.0268]
    },
    {
        name: "POPLAR",
        pt: [51.5077, -0.0174]
    },
    {
        name: "BLACKWALL",
        pt: [51.50839210341342, -0.007420020120971404]
    },
    {
        name: "EAST INDIA",
        pt: [51.509538073528226, -0.002099414568087708]
    },
    {
        name: "CANNING TOWN",
        pt: [51.5148, 0.0148]
    },
    {
        name: "ROYAL VICTORIA",
        pt: [51.5098, 0.0187]
    },
    {
        name: "CUSTOM HOUSE FOR EXCEL",
        pt: [51.50963, 0.02596]
    },
    {
        name: "WEST INDIA QUAY",
        pt: [51.50674, -0.02048]
    },
    {
        name: "WEST SILVERTOWN",
        pt: [51.50288, 0.02233]
    },
    {
        name: "HERON QUAYS",
        pt: [51.5034, -0.0203]
    },
    {
        name: "SOUTH QUAY",
        pt: [51.4994, -0.0186]
    },
    {
        name: "CROSSHARBOUR",
        pt: [51.49567, -0.01446]
    },
    {
        name: "MUDCHUTE",
        pt: [51.4908, -0.0141]
    },
    {
        name: "PRINCE REGENT",
        pt: [51.5098, 0.0335]
    },
    {
        name: "ROYAL ALBERT",
        pt: [51.5082, 0.0463]
    },
    {
        name: "BECKTON PARK",
        pt: [51.5084, 0.0615]
    },
    {
        name: "CYPRUS",
        pt: [51.50833479819819, 0.06399703140754023]
    },
    {
        name: "GALLIONS REACH",
        pt: [51.5095, 0.0737]
    },
    {
        name: "PONTOON DOCK",
        pt: [51.50274576893476, 0.03198977008808532]
    },
    {
        name: "LONDON CITY AIRPORT",
        pt: [51.50360205200153, 0.04876203940132891]
    },
    {
        name: "KING GEORGE V",
        pt: [51.502093493051966, 0.062325452893720025]
    },
    {
        name: "BECKTON",
        pt: [51.514, 0.0615]
    },
    {
        name: "ISLAND GARDENS",
        pt: [51.4869, -0.0086]
    },
    {
        name: "CUTTY SARK FOR MARITIME GREENWICH",
        pt: [51.481596007635325, -0.010826461366807793]
    },
    {
        name: "GREENWICH",
        pt: [51.47791, -0.01533]
    },
    {
        name: "DEPTFORD BRIDGE",
        pt: [51.4741, -0.0225]
    },
    {
        name: "ELVERSON ROAD",
        pt: [51.4696, -0.0174]
    },
    {
        name: "LEWISHAM",
        pt: [51.4644, -0.0128]
    },
    {
        name: "WOOLWICH ARSENAL",
        pt: [51.4916, 0.0693]
    },
    {
        name: "STAR LANE",
        pt: [51.5206, 0.004]
    },
    {
        name: "ABBEY WOOD",
        pt: [51.49167, 0.12]
    },
    {
        name: "ACTON MAIN LINE",
        pt: [51.5179, -0.26744]
    },
    {
        name: "BOND STREET",
        pt: [51.51451, -0.14917]
    },
    {
        name: "BRENTWOOD",
        pt: [51.61306, 0.29944]
    },
    {
        name: "BURNHAM",
        pt: [51.52392, -0.64606]
    },
    {
        name: "CHADWELL HEATH",
        pt: [51.56844, 0.12892]
    },
    {
        name: "EALING BROADWAY",
        pt: [51.51499, -0.30197]
    },
    {
        name: "FARRINGDON",
        pt: [51.52018, -0.10405]
    },
    {
        name: "FOREST GATE",
        pt: [51.54985, 0.02555]
    },
    {
        name: "GIDEA PARK",
        pt: [51.58075, 0.21784]
    },
    {
        name: "GOODMAYES",
        pt: [51.56417, 0.11098]
    },
    {
        name: "HANWELL",
        pt: [51.51112, -0.33825]
    },
    {
        name: "HAROLD WOOD",
        pt: [51.59209, 0.23319]
    },
    {
        name: "HAYES & HARLINGTON",
        pt: [51.5031, -0.42084]
    },
    {
        name: "HEATHROW TERMINAL 4",
        pt: [51.45823, -0.44572]
    },
    {
        name: "HEATHROW TERMINAL 5",
        pt: [51.47217, -0.49122]
    },
    {
        name: "HEATHROW TERMINALS 2 & 3",
        pt: [51.47129, -0.45226]
    },
    {
        name: "ILFORD",
        pt: [51.55875, 0.06884]
    },
    {
        name: "IVER",
        pt: [51.50806, -0.50795]
    },
    {
        name: "LANGLEY",
        pt: [51.50812, -0.54325]
    },
    {
        name: "LIVERPOOL STREET",
        pt: [51.51732, -0.08223]
    },
    {
        name: "PADDINGTON",
        pt: [51.51684, -0.17609]
    },
    {
        name: "MAIDENHEAD",
        pt: [51.52251, -0.72265]
    },
    {
        name: "MANOR PARK",
        pt: [51.55173, 0.0456]
    },
    {
        name: "MARYLAND",
        pt: [51.54677, -0.00479]
    },
    {
        name: "READING",
        pt: [51.45903, -0.97211]
    },
    {
        name: "ROMFORD",
        pt: [51.57438, 0.1833]
    },
    {
        name: "SEVEN KINGS",
        pt: [51.56484, 0.09626]
    },
    {
        name: "SHENFIELD",
        pt: [51.6302, 0.32975]
    },
    {
        name: "SLOUGH",
        pt: [51.51128, -0.59184]
    },
    {
        name: "SOUTHALL",
        pt: [51.50697, -0.37734]
    },
    {
        name: "TAPLOW",
        pt: [51.52368, -0.68439]
    },
    {
        name: "TOTTENHAM COURT ROAD",
        pt: [51.51645, -0.13006]
    },
    {
        name: "TWYFORD",
        pt: [51.47467, -0.86318]
    },
    {
        name: "WEST DRAYTON",
        pt: [51.5107, -0.47245]
    },
    {
        name: "WEST EALING",
        pt: [51.51398, -0.32072]
    },
    {
        name: "WHITECHAPEL",
        pt: [51.51958, -0.05997]
    },
    {
        name: "WOOLWICH",
        pt: [51.4913, 0.0674]
    },
    {
        name: "GREENWICH PENINSULA",
        pt: [51.50074, 0.00475]
    },
    {
        name: "ROYAL DOCKS",
        pt: [51.50798, 0.01765]
    },
];

App.prototype.initializePlaces = function() {
    console.log("initialize places");

    sourcePlaces.forEach((sourcePlace) => {
        var place = new Place(sourcePlace.name, sourcePlace.pt, false);
        app.placeList.push(place);
    });
};