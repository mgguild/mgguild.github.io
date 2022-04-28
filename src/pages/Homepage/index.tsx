import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import Page from 'components/layout/Page'
import { EcoSection, HomeSection } from './sections'

const Homepage = () => {
    return (
        <Page>
            <HomeSection />
            <EcoSection />
        </Page>
    )
}

export default Homepage;