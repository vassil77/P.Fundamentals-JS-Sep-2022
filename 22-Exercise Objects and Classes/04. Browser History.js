function f2(obj, array) {

    array.forEach(element => {

        if (element === 'Clear History and Cache') {
            obj["Open Tabs"] = []; //.splice(0, obj["Open Tabs"].length);
            obj["Recently Closed"] = []; //.splice(0, obj["Recently Closed"].length);
            obj["Browser Logs"] = []; //.splice(0, obj["Browser Logs"].length);
        } else {
            let [command, site] = element.split(' ');
            switch (command) {
                case "Open":
                    obj['Open Tabs'].push(site);
                    obj["Browser Logs"].push(element);
                    break;


                case "Close":
                    let index = obj['Open Tabs'].indexOf(site);
                    if (index !== -1) {
                        obj['Open Tabs'].splice(index, 1);
                        obj['Recently Closed'].push(site);
                        obj["Browser Logs"].push(element);
                    }
                    break;
            }

        }
    });



    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(', ')}`);


}

//-----------------
f2(

    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]


);



//console.log(`-----------------`);