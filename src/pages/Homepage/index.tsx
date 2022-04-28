import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import Page from 'components/layout/Page'
import { EcoSection, GrowthSection, HomeSection } from './sections'

const Homepage = () => {
    return (
        <Page>
            <HomeSection />
            <EcoSection />
            <GrowthSection />
        </Page>
    )
}

export default Homepage;