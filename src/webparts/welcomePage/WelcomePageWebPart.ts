import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WelcomePageWebPartStrings';
import WelcomePage from './components/WelcomePage';
import HomePage from "./components/HomePage";
import { IWelcomePageProps } from './components/IWelcomePageProps';

var renderContent: any;

export interface IWelcomePageWebPartProps {
  description: string;
}

// if((/welcome.aspx/.test(window.location.href.toLowerCase()) )){
//   console.log(window.location.href.toLowerCase());
//   renderContent = WelcomePage;
// }else if((/home.aspx/.test(window.location.href.toLowerCase()) )){
//   console.log(window.location.href.toLowerCase());
//   renderContent = HomePage;
// }else {
//   console.log(window.location.href.toLowerCase());
//   renderContent = HomePage;
// }


export default class WelcomePageWebPart extends BaseClientSideWebPart <IWelcomePageWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWelcomePageProps> = React.createElement(
      WelcomePage,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
