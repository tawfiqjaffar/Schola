module.exports = {
    "src_folders": ["tests"],
    "output_folder": false,
    "globals_path": "globals.js",

    "test_workers": {
        "enabled": true,
        "workers": "auto"
    },

    "selenium": {
        "start_process": false
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 9515,
            "selenium_host": "localhost",
            "default_path_prefix": "",

            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "args": ["--headless"]
                },
                "acceptSslCerts": true
            }
        }
    }
}