const stateName = '_tuanngo_recipes'
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateName, serializedState)
  } catch (err) {
    console.warn(err)
  }
}