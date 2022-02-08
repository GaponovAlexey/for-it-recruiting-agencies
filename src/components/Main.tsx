import { css } from '@emotion/css'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import ImgMediaCard from './ImgMediaCard'

export const Main: FC = (): JSX.Element => {
  const photos = useSelector((state: RootState) => state?.allPhoto?.photos)

  console.log(photos)

  return (
    <div
      className={css`
        padding: 10px 20px;
      `}
    >
      <div>
        <ImgMediaCard />
      </div>
    </div>
  )
}
