const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://insuranceDB:9urNnJYwReY1rumW@insurancedb.u6oaxej.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  industry: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
const Company = mongoose.model('Company', companySchema);

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).send({ message: 'Email already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).send({ message: 'User created' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    res.status(200).send({ message: 'User authenticated', data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.post('/api/companies', async (req, res) => {
  const { name, location, price, industry } = req.body;

  try {
    const newCompany = new Company({ name, location, price, industry });
    await newCompany.save();

    res.status(201).send({ message: 'Company created' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).send(companies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.get('/api/companies/search', async (req, res) => {
  const { name, location, industry } = req.query;

  const filter = {};
  if (name) filter.name = { $regex: new RegExp(name), $options: 'i' };
  if (location) filter.location = { $regex: new RegExp(location), $options: 'i' };
  if (industry) filter.industry = { $regex: new RegExp(industry), $options: 'i' };

  try {
    const companies = await Company.find(filter);
    res.status(200).send(companies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
