import path from "path";
import fs from "fs";
import os from "os";
import { exec, execSync } from "child_process";
import { t } from "tar";

export class test_ipfs_faiss_js {
    constructor() {
        this.imports = {};
        this.config = requireConfig();
    }
    async init() {
        let init_results = {}
        console.log("Initializing ipfs_faiss_js/main.js");
        console.log("Initializing ipfs_faiss_js/index.js");
        console.log("Initializing index.js");
        return init_results
    }
    
    async test() {
        let test_results = {}
        console.log("Running tests for ipfs_faiss_js/main.js");
        console.log("Running tests for ipfs_faiss_js/index.js");
        console.log("Running tests for index.js");
        return test_results
    }
}

if (import.meta.url === 'file://' + process.argv[1]) {
    console.log("Running test");
    let test_results = {};
    try{
        const testIpfsFaissJs = new test_ipfs_faiss_js();
        await testIpfsFaissJs.init().then((init) => {
            test_results.init = init;
            console.log("testIpfsFaissJs init: ", init);
            testIpfsFaissJs.test().then((result) => {
                test_results.results = result;
                console.log("testIpfsFaissJs: ", result);
            }).catch((error) => {
                test_results.results = error;
                console.log("testIpfsFaissJs error: ", error);
                // throw error;
            });
        }).catch((error) => {
            testIpfsFaissJs.init = error ;
            console.error("testIpfsFaissJs init error: ", error);
            // throw error;
            testIpfsFaissJs.test().then((result) => {
                test_results.results = result;
                console.log("testIpfsFaissJs: ", result);
            }).catch((error) => {
                test_results.results = error;
                console.log("testIpfsFaissJs error: ", error);
                // throw error;
            });
        });
        console.log(test_results);
        fs.writeFileSync("./tests/test_results.json", JSON.stringify(test_results, null, 2));
        let testResultsFile = "./tests/README.md";
        let testResults = "";
        for (let key in test_results) {
            testResults += key + "\n";
            testResults += "```json\n";
            testResults += JSON.stringify(test_results[key], null, 2);
            testResults += "\n```\n";
        }
        fs.writeFileSync(testResultsFile, testResults);
        if (Object.keys(test_results).includes("test_results") === false) {
            process.exit(0);
        }
        else{
            process.exit(1);
        }   
    }
    catch(err){
        console.log(err);
        // process.exit(1);
    }   
}