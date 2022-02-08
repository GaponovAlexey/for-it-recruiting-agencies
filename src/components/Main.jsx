import { css } from '@emotion/css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPhotos } from '../Redux/reducer'

export const Main = () => {
  const { photos, page, query, pageQty } = useSelector(
    (state) => state?.allPhoto
  )
  const dispatch = useDispatch()
  console.log(photos)

  useEffect(() => {
    dispatch(fetchUserPhotos(page))
  }, [page, query])

  return (
    <div
      className={css`
        padding: 10px 20px;
      `}
    >
      <div></div>
      <div></div>
    </div>
  )
}
