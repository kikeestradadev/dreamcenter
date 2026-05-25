export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  students?: number;
  progress?: number;
  isNew?: boolean;
  isFree?: boolean;
  isUpcoming?: boolean;
}

export interface StudyPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  coursesCount: number;
  hours: number;
  image: string;
  bannerImage?: string;
  featured?: boolean;
}

/** Registro crudo en paths.json — incluye slugs de cursos relacionados */
export interface PathRecord {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  image: string;
  bannerImage?: string;
  featured?: boolean;
  courseSlugs: string[];
}

export interface School {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  coursesCount: number;
}

export interface CoursesFile {
  courses: Course[];
}

export interface PathsFile {
  paths: PathRecord[];
}
