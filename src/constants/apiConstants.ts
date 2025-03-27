export enum apiRoutes {
  // Auth
  LOGIN = '/auth/login',
  SIGNUP = '/auth/register',
  GOOGLE_LOGIN = '/auth/google/login',
  GOOGLE_CALLBACK = '/auth/google/callback',
  // User
  FETCH_USER = '/user',
  UPLOAD_USER_IMAGE_PREFIX = '/user/upload',
  UPDATE_USER = 'user/update-user',
  UPDATE_PASSWORD = '/user/update-password',
  // Event
  FETCH_EVENTS = '/events',
  FETCH_USER_EVENTS = '/events/user-events',
  // Log
  LOG_PREFIX = '/log',
}

export enum apiMethods {
  GET = 'get',
  DELETE = 'delete',
  HEAD = 'head',
  OPTIONS = 'options',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
}
