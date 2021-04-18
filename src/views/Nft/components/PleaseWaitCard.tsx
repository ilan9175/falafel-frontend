import React from 'react'
import { Heading, Text } from 'flf-uikit'
import useI18n from 'hooks/useI18n'
import SecondaryCard from './SecondaryCard'
import CardContent from './CardContent'

const PleaseWaitCard = () => {
  const TranslateString = useI18n()

  return (
    <SecondaryCard>
      <CardContent imgSrc="https://raw.githubusercontent.com/ilan9175/flf-frontend/master/public/images/present-alt.svg">
        <Heading mb="8px">{TranslateString(999, 'Please wait...')}</Heading>
        <Text>{TranslateString(999, "The claiming period hasn't started yet. Check back soon.")}</Text>
      </CardContent>
    </SecondaryCard>
  )
}

export default PleaseWaitCard
