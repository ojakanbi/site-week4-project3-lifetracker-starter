\echo 'Delete and recreate lifetracker db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker

\i lifetracker-schema.sql

\echo 'Delete and recreate lifetracker_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS lifetracker_test;
CREATE DATABASE lifetracker_test;
\connect lifetracker_test

\i lifetracker-schema.sql

