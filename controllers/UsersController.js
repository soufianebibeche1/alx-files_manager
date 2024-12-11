import dbClient from '../utils/db';
import sha1 from 'sha1';

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ error: 'Missing email' });
    if (!password) return res.status(400).json({ error: 'Missing password' });

    try {
      const usersCollection = dbClient.db.collection('users');

      const userExists = await usersCollection.findOne({ email });
      if (userExists) return res.status(400).json({ error: 'Already exist' });

      const hashedPassword = sha1(password);

      const result = await usersCollection.insertOne({ email, password: hashedPassword });
      const newUser = { id: result.insertedId, email };

      return res.status(201).json(newUser);
    } catch (err) {
      console.error('Error creating user:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
