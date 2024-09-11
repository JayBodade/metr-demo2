import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectId:{type:String,required:true,unique:true},
  projectTitle: { type: String, required: true }, 
  projectClient: { type: String },
  projectAddress: { type: String },
  projectType:{type:String},
  projectDescription: { type: String },
  projectThumbnail: { type: String },  
  projectAboutImage: { type: String }, 
  projectRating:{type:Number},
  projectImages: [
    {
      docid: { type: String, required: true },   
      urlstring: { type: String, required: true } 
    }
  ], 
});


const projectModel = mongoose.model('Project', projectSchema);
export default projectModel;
