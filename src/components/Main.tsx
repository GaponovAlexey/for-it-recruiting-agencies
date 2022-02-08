import { css } from '@emotion/css'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPhotos } from '../Redux/reducer'
import { RootState } from '../Redux/store'
import ImgMediaCard from './ImgMediaCard'

export const Main: FC = (): JSX.Element => {
  const photos = useSelector((state: RootState) => state?.allPhoto?.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserPhotos())
  }, [])

  return (
    <div
      className={css`
        padding: 10px 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      `}
    >
      <div className={css``}>
        {photos.map((ph: any) => {
          return (
            <div>
              <ImgMediaCard key={ph.id} {...ph} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
