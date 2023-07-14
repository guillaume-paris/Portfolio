const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * /api/user/get:
 *   get:
 *     summary: Get the logged in user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 age:
 *                   type: number
 *                 city:
 *                   type: string
 *                 country:
 *                   type: string
 *                 nationality:
 *                   type: string
 *                 description:
 *                   type: string
*/
router.get('/get', userController.getUser);

/**
 * @swagger
 * /api/user/edit:
 *   put:
 *     summary: Edit a user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               gender:
 *                 type: string
 *               age:
 *                 type: number
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *               nationality:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: The user was successfully edited
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 age:
 *                   type: number
 *                 city:
 *                   type: string
 *                 country:
 *                   type: string
 *                 nationality:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: User not found
 */
router.put('/edit', userController.editUser);

/**
 * @swagger
 * /api/user/delete:
 *   delete:
 *     summary: Delete a user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user was successfully deleted
 *       404:
 *         description: User not found
 */
router.delete('/delete', userController.deleteUser);

module.exports = router;