export const Colors = (theme) => {
  return theme === 'dark' ? {
    PrimaryFont: '#dddedc',
    SecondaryFont: '#c5c5c5',
    AlternateFont: '#999',
    BackgroundColor: '#30364c'
  }
  : {
    PrimaryFont: '#30364c',
    SecondaryFont: '#7a8277',
    AlternateFont: '#dcdcdc',
    BackgroundColor: '#fff'
  }
}