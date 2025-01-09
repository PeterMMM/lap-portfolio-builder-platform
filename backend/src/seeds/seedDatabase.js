const connectDB = require('../config/db');
const { User, UserRole } = require('../models/UserData');
const { ContactInfo } = require('../models/ContactInfoData');
const { Skill } = require('../models/SkillData');

//Database Connection
connectDB();

async function seedDatabase() {
  try {
    // Clear existing data 
    await User.deleteMany({});
    await UserRole.deleteMany({});
    await ContactInfo.deleteMany({});
    await Skill.deleteMany({});

    // Insert User Roles
    const adminRole = await UserRole.create({ role: 'Admin', description: 'Administrator role' });
    const userRole = await UserRole.create({ role: 'User', description: 'Regular user role' });

    // Insert Skills
    const skill1 = await Skill.create({ skill: 'JavaScript' });
    const skill2 = await Skill.create({ skill: 'Java' });

    // Insert Contact Info
    const contactInfo = await ContactInfo.create({
      phone_number: '1234567890',
      email: 'testuser@example.com',
      address: 'Gyo Gone 2nd street',
    });

    // Insert Users
    await User.create({
      usr_name: 'testuser',
      password: 'password123',
      profile_pic: '',
      usr_role_id: userRole._id,
      contact_info_id: contactInfo._id,
      skill_ids: [skill1._id, skill2._id],
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
