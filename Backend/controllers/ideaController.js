import Idea from '../models/Idea.js';

export const getIdeas = async (req, res) => {
  const ideas = await Idea.find().sort({ createdAt: -1 });
  res.json(ideas);
};

export const createIdea = async (req, res) => {
  const { title, description, tags } = req.body;
  const newIdea = new Idea({ title, description, tags });
  await newIdea.save();
  res.status(201).json(newIdea);
};

export const updateIdea = async (req, res) => {
  const idea = await Idea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(idea);
};

export const deleteIdea = async (req, res) => {
  await Idea.findByIdAndDelete(req.params.id);
  res.json({ message: 'Idea deleted' });
};
