import express from 'express'
import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedNewDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedNewDiaryEntry)
  } catch (error) {
  }
})

export default router
