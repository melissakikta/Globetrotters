import { FormData } from '../interfaces/Form';

const retrieveBucketList = async () => {
  try {
    const response = await fetch('/api/bucketList');
    return response.json();
  }