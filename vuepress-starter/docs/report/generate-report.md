# Report Generation

In build mode, Medusza automatically generates two types of reports:

1. **HTML Report** (`report_test.html`)
2. **JSON Report** (`report.json`)

## Accessing the Reports

Both reports are saved in the Medusza home directory. To read the reports, navigate to:

```
$home/medusza
```

## HTML Report

The HTML report (`report_test.html`) provides a user-friendly, web-based view of the data and findings from the build process. This report is ideal for quick browsing and presentation purposes.

## JSON Report

The JSON report (`report.json`) contains the same data as the HTML report but in a machine-readable format. This is useful for programmatic access, further processing, or integration with other tools.

## Summary

Medusza ensures that all relevant build information is documented and easily accessible through these automatically generated reports. By navigating to the `$home/medusza` directory, you can quickly access and utilize the `report_test.html` and `report.json` files as needed.


# Report Generation from Command Line

In build mode, Medusza automatically generates two types of reports:

1. **HTML Report**
2. **JSON Report**

## Generating Reports via Command Line

When running tests from the command line or in a CI/CD pipeline, you can specify the format and customize the output file names and paths for the reports.

### JSON Report

To generate a JSON report, use the following command:

```bash
npm run test -- --format "json:Your_path/your_report_name.json"
```

### HTML Report

To generate an HTML report, use the following command:

```bash
npm run test -- --format "html:Your_path/your_report_name.html"
```

Replace `Your_path` with the desired directory and `your_report_name` with your preferred file name for the reports.

## Summary

Medusza allows flexible report generation through command line options, making it easy to integrate with CI/CD pipelines. By using the appropriate `--format` option, you can direct the output of your reports to specific locations and customize their file names, ensuring that all relevant build information is captured and accessible.