import { promisify } from 'util';
import { createClient } from 'redis';

/**
 * This class is used to interact with a Redis server.
 */
class RedisClient {
  /**
   * The constructor sets up the Redis client and listens for connection events.
   */
  constructor() {
    this.client = createClient(); // Create a new Redis client
    this.isClientConnected = true; // Initially assume the client is connected
    // If there is an error while connecting to Redis, print an error message
    this.client.on('error', (err) => {
      console.error(`Redis client failed to connect: ${err.message || err.toString()}`);
      this.isClientConnected = false; // Set connection status to false if there's an error
    });
    // If the Redis client successfully connects, set the connection status to true
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });
  }

  /**
   * This method checks if the Redis client is connected to the server.
   * @returns {boolean} Returns true if the client is connected, otherwise false.
   */
  isAlive() {
    return this.isClientConnected; // Return whether the client is connected or not
  }

  /**
   * This method retrieves the value of a given key from Redis.
   * @param {string} key The key of the item to get from Redis.
   * @returns {Promise<string | null>} The value of the key or null if not found.
   */
  async get(key) {
    // Use Redis' GET command to get the value of the key
    return promisify(this.client.GET).bind(this.client)(key);
  }

  /**
   * This method sets a key-value pair in Redis, with an expiration time.
   * @param {string} key The key of the item to store.
   * @param {string | number | boolean} value The value to store.
   * @param {number} duration The time in seconds before the key expires.
   * @returns {Promise<void>} This function doesn't return any value, it just sets the key.
   */
  async set(key, value, duration) {
    // Use Redis' SETEX command to store the value with an expiration time
    await promisify(this.client.SETEX)
      .bind(this.client)(key, duration, value);
  }

  /**
   * This method deletes a key-value pair from Redis.
   * @param {string} key The key of the item to remove.
   * @returns {Promise<void>} This function doesn't return any value, it just removes the key.
   */
  async del(key) {
    // Use Redis' DEL command to remove the key-value pair
    await promisify(this.client.DEL).bind(this.client)(key);
  }
}

// Create an instance of the RedisClient class to use in your application
const redisClient = new RedisClient();

// Export the redisClient instance for use in other parts of the application
export { redisClient }
