import React from 'react'
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'
import { FiSearch } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/filter/slice'

export const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef(null)

  
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 500),
    [],
  )
  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }
  const onClickClear = (event) => {
    dispatch(setSearchValue(''))
    setValue('')

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className={styles.root}>
      <FiSearch className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Пошук піци..."
      />
      {value && (
        <RxCross1 onClick={onClickClear} className={styles.clearIcon} />
      )}
    </div>
  )
}
