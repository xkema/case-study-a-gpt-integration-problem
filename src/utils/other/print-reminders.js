/**
 * Reminders list.
 */
const reminders = [
  'Use an ES6 "import" statement to import this Todo List.',
  'The pages; ("Homepage" and "Detail Page") have different layouts and meta information.',
  'The "cmd" array protects us against late library initializations.',
  'Relax! This is not an exam. It is just a stupid assignment.',
  'Contact with us about anything, at anytime. The best way is to use GitHub/issues section of this repo.'
]

/**
 * Prints some of the case-study reminders for U!
 */
const printReminders = () => {
  console.group('Reminders for U!')
  reminders.forEach((reminder) => {
    console.log('%c[ ]', 'color:gray;', reminder)
  })
  console.groupEnd()
}

export { printReminders }
