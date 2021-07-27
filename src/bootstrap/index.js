import axios from 'axios'
//const axios = require('axios').default;
import { URI_BASE_API } from '../configs/api'

axios.defaults.baseURL = URI_BASE_API
