# Settings

## How to Add your Application

1. Make a PR to https://github.com/RedHatInsights/cloud-services-config where you add your application as a sub app for Settings. You application must exist in the `main.yml`.
2. Have `GET` and `POST` API endpoints at `/ApplicationName/Settings`.
    - At `GET` endpoint you will return the array of schemas in [Data Driven Forms](https://data-driven-forms.org/) format.
    - At `POST` endpoint you will receive the the submited values.

### Example form with validators and conditional fields

``` JSON
[
    {
        "fields": [
            {
            "component": "checkbox",
            "label": "Checkbox",
            "name": "checkbox",
            "isRequired": true,
            "validate": [{
                "type": "required-validator"
            }]},
            {
            "name": "conditionalTextField",
            "label": "When checkbox is checked!",
            "component": "text-field",
            "condition": {
                "when": "checkbox", // name of controlled field
                "is": true, // condition
            }}
        ]
    }
]
```
