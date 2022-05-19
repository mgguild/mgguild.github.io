import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import Page from 'components/layout/Page'
import * as Sections from './sections'

const Pages = (Sections as unknown) as { [key: string]: React.FC<{}> };

const Homepage = () => {
    return (
        <Page>
             { 
                Object.keys(Pages).reverse().map(function(key ) {
                    const Page = Pages[key] as React.FC<{}>
                    return <Page key={key} />
                })
            }
        </Page>
    )
}

export default Homepage;