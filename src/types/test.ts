export type Test = {
  id: number;
  name: null;
  title: string;
  description: string;
  difficulty_level: null;
  topic: string;
  time: Date;
  is_published: boolean;
  created_at: Date;
  updated_at: Date;
  duration: number;
  end_time: Date;
  negative_marks: string;
  correct_answer_marks: string;
  shuffle: boolean;
  show_answers: boolean;
  lock_solutions: boolean;
  is_form: boolean;
  show_mastery_option: boolean;
  reading_material: null;
  quiz_type: null;
  is_custom: boolean;
  banner_id: null;
  exam_id: null;
  show_unanswered: boolean;
  ends_at: Date;
  lives: null;
  live_count: string;
  coin_count: number;
  questions_count: number;
  daily_date: string;
  max_mistake_count: number;
  reading_materials: any[];
  questions: Question[];
  progress: number;
};

export type Question = {
  id: number;
  description: string;
  difficulty_level: null;
  topic: "Molecular Basis Of Inheritance ";
  is_published: boolean;
  created_at: Date;
  updated_at: Date;
  detailed_solution: string;
  type: null | string;
  is_mandatory: boolean;
  show_in_feed: boolean;
  pyq_label: null | string;
  topic_id: number;
  reading_material_id: number;
  fixed_at: Date | null;
  fix_summary: null | string;
  created_by: null;
  updated_by: null | string;
  quiz_level: null;
  question_from: "Q-bank";
  language: null;
  photo_url: null;
  photo_solution_url: null;
  is_saved: boolean;
  tag: string;
  options: Option[];
  reading_material: ReadingMaterial;
};

export type Option = {
  id: number;
  description: string;
  question_id: number;
  is_correct: boolean;
  created_at: Date;
  updated_at: Date;
  unanswered: boolean;
  photo_url: null;
};

export type ReadingMaterial = {
  id: number;
  keywords: string;
  content: null;
  created_at: Date;
  updated_at: Date;
  content_sections: string[];
  practice_material: PracticeMaterial;
};

export type PracticeMaterial = {
  content: string[];
  keywords: string[];
};
