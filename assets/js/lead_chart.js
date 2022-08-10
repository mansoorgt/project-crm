window.onload = function () {

    var options = {
        animationEnabled: true,
        title: {
            text: "Leads management"
        },
        axisY: {
            title: "Growth Rate (in %)",
            suffix: "%"
        },
        axisX: {
            title: "Leads Source"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#"%"",
            dataPoints: [
                { label: "Facebook", y: 10.09 },	
                { label: "Instagram", y: 9.40 },	
                { label: "Whatsapp", y: 8.50 },
                { label: "Tidio", y: 7.96 },	
                { label: "Call", y: 7.80 },
                { label: "Gmail", y: 7.56 },
                { label: "Walkin", y: 7.20 },
                
                
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    }