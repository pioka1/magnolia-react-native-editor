# Magnolia React Native Editor (non-official)

This package is a near-identical clone of `@magnolia/react-editor` except it uses React Native `<View>` components as
wrappers rather than `<div>`. This allows you to build your React Native project for the web (`expo build:web`) and let
Magnolia use it for previewing (i.e. placing the resulting build in `my-light-module\webresources\build`), while
maintaining the ability to build for Android/iOS.

This package is a temporary solution, as Magnolia intends to support React Native in the future:
https://jira.magnolia-cms.com/browse/SUGGEST-235

This is a non-official community package. It is not maintained or in any way endorsed by Magnolia.

## Usage

 1. Install the package:
```
npm install --save magnolia-react-native-editor
```

 2. Connect to rest endpoints and use `<EditablePage>` directive in your component:
```
render() {
   const COMPONENTS_MAPPING = {
      'sample-light-module:components/title': TitleComponent,
      'sample-light-module:components/text-image': ImageComponent,
      'sample-light-module:pages/standard': HomePage
   };

   let response = await fetch(environment.restUrlBase + environment.rootPath);
   const content = await response.json();
   response = await fetch(environment.templateDefinitionBase + '/' + content['mgnl:template']);
   const templateDefinitions = response.json();
   const pageConfig = {componentMappings: COMPONENTS_MAPPING};

   return(
      <EditablePage content={content} config={pageConfig} templateDefinitions={templateDefinitions} />
   );
}
```

 3. Render areas inside your components using `<EditableArea>` directive:
```
<View>
  <Text>Primary Area</Text>
  <EditableArea key="main" content={mainAreaContent} />
</View>
```
