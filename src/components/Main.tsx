import { css } from '@emotion/css'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPhotos } from '../Redux/reducer'
import { RootState } from '../Redux/store'
import ImgMediaCard from './ImgMediaCard'

export const Main: FC = (): JSX.Element => {
  const { photos, curentPage, totalPage, perPage } = useSelector(
    (state: RootState) => state.allPhoto
  )

  const dispatch = useDispatch()
  console.log(photos)

  const page = [1, 2, 3, 4, 5]

  useEffect(() => {
    dispatch(fetchUserPhotos())
  }, [])

  return (
    <div
      className={css`
        padding: 10px 20px;
      `}
    >
      <div className={css``}>
        {photos.map((ph: any) => {
          return <div key={ph.id}>{/* <ImgMediaCard {...ph} /> */}</div>
        })}
      </div>
      <div>
        {page.map((page) => (
          <span>{page}</span>
        ))}
      </div>
    </div>
  )
}
