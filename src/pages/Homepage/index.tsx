import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import Page from 'components/layout/Page'
import { ChainSection, EcoSection, GrowthSection, HomeSection } from './sections'

const Homepage = () => {
    return (
        <>
        <Page>
            <HomeSection />
            <EcoSection />
            <GrowthSection />
            <ChainSection />
        </Page>
        </>
    )
}

export default Homepage;