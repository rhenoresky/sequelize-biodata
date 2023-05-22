import { biodata } from "./model.js";

const create = async (req, res) => {
    try {
        if (!req.body.nama) {
            res.status(400).send({
                message: 'Nama Kosong'
            })
        } else if (!req.body.tempat_lahir) {
            res.status(400).send({
                message: 'Tempat Lahir Kosong'
            })
        } else if (!req.body.tanggal_lahir) {
            res.status(400).send({
                message: 'Tanggal Lahir Kosong'
            })
        } else if (!req.body.alamat) {
            res.status(400), send({
                message: 'Alamat Kosong'
            })
        } else {
            const bio = {
                nama: req.body.nama,
                tempat_lahir: req.body.tempat_lahir,
                tanggal_lahir: req.body.tanggal_lahir,
                alamat: req.body.alamat
            }
            const result = await biodata.create(bio)
            res.status(200).send(result)
        }
    } catch (err) {
        console.error('Database Error', err)
        res.status(500).send({
            message: 'Server Error'
        })
    }
}

const update = async (req, res) => {
    try {
        if (!req.body.nama) {
            res.status(400).send({
                message: 'Nama Kosong'
            })
        } else if (!req.body.tempat_lahir) {
            res.status(400).send({
                message: 'Tempat Lahir Kosong'
            })
        } else if (!req.body.tanggal_lahir) {
            res.status(400).send({
                message: 'Tanggal Lahir Kosong'
            })
        } else if (!req.body.alamat) {
            res.status(400), send({
                message: 'Alamat Kosong'
            })
        } else {
            const result = await biodata.findOne(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            if (result === null) {
                res.status(400).send({
                    message: 'Id Tidak Di Temukan'
                })
            } else {
                result.nama = req.body.nama
                result.tempat_lahir = req.body.tempat_lahir
                result.tanggal_lahir = req.body.tanggal_lahir
                result.alamat = req.body.alamat
                await result.save()
                res.status(200).send(result)
            }
        }
    } catch (err) {
        console.error('Error Database', err)
        res.status(500).send({
            message: 'Server Error'
        })
    }
}

const findAll = async (req, res) => {
    try {
        const result = await biodata.findAll()
        res.status(200).send(result)
    } catch (err) {
        console.error('Error Database', err)
        res.status(500).send({
            message: 'Server Error'
        })
    }
}

const findOne = async (req, res) => {
    try {
        const result = await biodata.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(result)
    } catch (err) {
        console.error('Error Database', err)
        res.status(500).send({
            message: 'Server Error'
        })
    }
}

const del = async (req, res) => {
    try {
        const result = await biodata.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!result) {
            res.status(400).send({
                message: 'Id Tidak Di Temukan'
            })
        } else {
            res.status(200).send({
                message: 'Menghapus Sukses'
            })
        }
    } catch (err) {
        console.error('Error Database', err)
        res.status(500).send({
            message: 'Server Error'
        })
    }
}

export { create, update, findAll, findOne, del }