import React, { useEffect, useState } from 'react'
import { useGetData } from '~/hooks'
import { useDataStore } from '~/stores'
import { CustomText, Logo, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  const { setAllData } = useDataStore()
  const { getFilmes, getPersonagens } = useGetData()
  const [loading, setLoading] = useState(true)

  async function callGetData() {
    const dataFilmes = await getFilmes()
    const dataPersonagens = await getPersonagens()

    if (!dataFilmes.error || !dataPersonagens.error) {
      setAllData({ dataFilmes, dataPersonagens })
    }

    setLoading(false)
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!loading) {
      navigation.navigate('TabHome')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <Container align="center" justify="center">
      <Logo size="large" />
      <CustomText fontFamily="bold">StarWars - Wiki</CustomText>
    </Container>
  )
}
