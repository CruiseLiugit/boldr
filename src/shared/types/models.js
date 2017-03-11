/* @flow */
/* eslint-disable import/prefer-default-export */

export type Stats = {
  posts: Number,
  users: Number,
  tags: Number,
};

export type Post = {
  id?: String,
  feature_image?: String,
  title: String,
  slug: String,
  content: String,
  background_image?: String,
  excerpt?: String,
  created_at: String,
  updated_at?: String,
  published: ?Boolean,
  author: ?User,
  tags?: Array<Tag>,
  attachments: ?Object,
  meta: ?Object,
  user_id: ?String,
};

export type PostImage = {
  created_at: String,
  file_description: ?String,
  file_name: ?String,
  file_type: String,
  id: String,
  original_name: String,
  updated_at: String,
  url: String,
  user_id: String
};

export type Tag = {
  id: Number,
  uuid: String,
  name: String,
  description: ?String,
};

export type Page = {
  id: String,
  name: String,
  url: String,
  layout: ?Object,
  status: String,
  meta: ?Object,
  restricted: Boolean,
  data: ?Object
}

export type Block = {
  id: String,
  name: String,
  label: String,
  content: ?Object
}

export type Setting = {
  id: Number,
  key: String,
  value: String,
  description: String
};

export type User = {
  id: String,
  email: String,
  first_name: String,
  last_name: String,
  username: String,
  avatar_url: ?String,
  location: ?String,
  bio: ?String,
  website: ?String,
  profile_image: ?String,
  birthday: ?String,
  social: ?UserSocial,
  verified: Boolean
};

export type Facebook = {
  url: String,
};

export type Google = {
  url: String,
};

export type Twitter = {
  url: String,
};

export type Github = {
  url: String,
};

export type LinkedIn = {
  url: String,
};

export type UserSocial = {
  google: ?Google,
  facebook: ?Facebook,
  twitter: ?Twitter,
  github: ?Github,
  linkedin: ?LinkedIn,
};

export type UI = {
  drawer: boolean,
  isMobile: boolean,
  layout: String,
  loaded: boolean,
  modal: boolean,
  navbar: boolean,
};

export type Menu = {
  id: Number,
  uuid: String,
  name: String,
  safe_name: String,
  attributes: ?Object,
  restricted: ?Boolean,
  details: Array<MenuDetails>
};

export type MenuDetails = {
  id: Number,
  uuid: String,
  name: String,
  safe_name: String,
  css_classname: String,
  has_dropdown: Boolean,
  order: Number,
  href: String,
  mobile_href: String,
  icon: String,
  children: Array<Object>
};